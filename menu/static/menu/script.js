// --------------------------------- timpeickerScript----------------------------------------------
$('.timepicker1').timepicker({
    timeFormat: 'H:mm',
    interval: 15,
    defaultTime: '08:00',
    startTime: '08:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
$('.timepicker2').timepicker({
    timeFormat: 'H:mm',
    interval: 15,
    defaultTime: '10:00',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});

// -------------------------------------------- datepickerScript ---------------------------------------
// Declare a variable to hold the timeout
var timeout;
var inputField = document.getElementById("date");

inputField.addEventListener("input", function () {
    clearTimeout(timeout);

    // Set a new timeout to wait for 500 milliseconds after the user stops typing
    timeout = setTimeout(function () {
        var dateParts = inputField.value.split('-');
        var year = parseInt(dateParts[0]);
        var month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript
        var day = parseInt(dateParts[2]);

        // Check if the entered date is valid
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return;
        }

        var selectedDate = new Date(year, month, day);
        var currentDate = new Date();

        if (selectedDate < currentDate) {
            inputField.value = '';
            alert("Bitte wählen Sie ein zukünftiges Datum.");
        }
    }, 1000);
});

// Get the current date
var today = new Date().toISOString().split('T')[0];


// Set the minimum value of the date input field
document.getElementById("date").setAttribute("min", today);


// ----------------------------- menu container---------------------------------

function resetCheckboxes() {
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkboxes = document.querySelectorAll('#menuContainer input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
        checkbox.disabled = false;
    });
}


// -------------------------------- calculateBillScript ----------------------------

var groupSize = 5; // Initial group size
var pricePerPerson = 0; // Price per person (initial value)
var selectedItemsCount = 0; // Total count of selected items
var itemPrice = 19; // Price per selected item (Stehlpulte + Hussen)
var transportCosts = 0; // 

var cateringGroupInput = document.getElementById('cateringGroup');
cateringGroupInput.addEventListener('change', handleGroupSizeChange);

function handleGroupSizeChange() {
groupSize = parseInt(cateringGroupInput.value);
updateGruppenKosten();
calculateTotalBill();
}

function decrementGroupSize() {
if (groupSize > 1) {
    groupSize--;
    updateGruppenKosten();
    calculateTotalBill();
}
}

function incrementGroupSize() {
groupSize++;
updateGruppenKosten();
calculateTotalBill();
}

function updateGruppenKosten() {
var billAmountElement = document.getElementById("billAmount");

if (groupSize >= 0 && groupSize <= 20) {
    pricePerPerson = 11;
} else if (groupSize >= 21 && groupSize <= 40) {
    pricePerPerson = 10;
} else if (groupSize >= 41 && groupSize <= 60) {
    pricePerPerson = 9;
} else if (groupSize >= 61 && groupSize <= 80) {
    pricePerPerson = 8;
} else {
    pricePerPerson = 0;
}

document.getElementById("groupSize").value = groupSize;
calculateTotalBill();
}

var geschirrTischKosten = 0; // Declare geschirrTischKosten as a global variable
var isGeschirrTischSelected = false; // Track whether the checkbox is selected or not

function updateGeschirrTischKosten() {
var groupSize = parseInt(document.getElementById("groupSize").value);

if (groupSize >= 1 && groupSize <= 20) {
    geschirrTischKosten = 45 + 10;  // UPDATE SELIM: added transportCosts 
} else if (groupSize >= 21 && groupSize <= 40) {
    geschirrTischKosten = 65 + 20;  // UPDATE SELIM: added transportCosts
} else if (groupSize >= 41 && groupSize <= 60) {
    geschirrTischKosten = 85;
} else if (groupSize >= 61 && groupSize <= 80) {
    geschirrTischKosten = 110;
}

if (isGeschirrTischSelected) {
    calculateTotalBill();
}
}

function toggleGeschirrTischSelection() {
isGeschirrTischSelected = !isGeschirrTischSelected;

if (isGeschirrTischSelected) {
    updateGeschirrTischKosten();
} else {
    geschirrTischKosten = 0;
    calculateTotalBill();
}
}

function updateStehpultKosten() {
var billCounterElement = document.getElementById("billCounter");
var checkboxes = document.querySelectorAll("#ausstattung input[type='checkbox']");
var stehlpulteCount = parseInt(document.getElementById("stehlpulteCount").value);

selectedItemsCount = 0;
// checkboxes.forEach(function (checkbox) {
//     if (checkbox.checked) {
//         selectedItemsCount++;
//     }
// });

selectedItemsCount += stehlpulteCount;

// billCounterElement.innerText = "Anzahl der ausgewählten Elemente: " + selectedItemsCount + "\nStehpult Kosten: " + (selectedItemsCount * itemPrice) + " Euro";
calculateTotalBill();
}

function calculateTransportCosts(){  //UPDATE SELIM
    transportCosts = 0;
    transportCosts += selectedItemsCount * 5;    // 5 Euro per Stehtisch selected
    
    // 40 euros transport for groups less then 20, 60 Euros above
    if (groupSize >= 5 && groupSize <=20){
        transportCosts += 40 
    } else if(groupSize > 20 && groupSize <= 60) {
        transportCosts +=60
    }
}

function calculateTotalBill() {
    calculateTransportCosts();
var totalBill = (pricePerPerson * groupSize) + geschirrTischKosten + (selectedItemsCount * itemPrice) + transportCosts;

document.getElementById("lastBill").textContent = "Der Preis beträgt gesamt Netto: " + totalBill + " Euro";
document.getElementById("lastBillInput").value = totalBill;
}

// ---------------------------- createPDFScript ---------------------------------------

const bookNowButton = document.getElementById('book-now');
const privacyCheckbox = document.getElementById('privacy-checkbox');
const loadingMessage = document.getElementById('loading-message');
const spinner = document.getElementById('spinner');

bookNowButton.addEventListener('click', () => {
  if (!privacyCheckbox.checked) {
    alert("Bitte akzeptieren Sie die Datenschutzerklärung vor der Buchung.");
    return;
  }

  // Show the loading message and spinner
  bookNowButton.style.display = 'none';
  loadingMessage.style.display = 'block';
  spinner.style.display = 'block';

  const form = document.querySelector('form');
  const formData = new FormData(form);

  fetch('/generate-pdf/', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'booking.pdf';
      a.click();
      window.URL.revokeObjectURL(url);

      // Redirect to the success page
    //   window.location.href = '/success/';
    });
});