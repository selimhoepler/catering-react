import jsPDF from 'jspdf';


export function generatePDF(formData) {
    const doc = new jsPDF();


    const totalPages = doc.internal.getNumberOfPages();
    const dataURL = null;




    const backgroundCanvas = document.getElementById('backgroundCanvas');
    const backgroundContext = backgroundCanvas.getContext('2d');
    const backgroundImage = new Image();

    backgroundImage.src = 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1693481873~exp=1693482473~hmac=5751f5583253f3c6766ff9782c555e09482ef6e341dfd94887d2184586a0a119'; // Replace with the path to your background image

    backgroundImage.crossOrigin = 'anonymous'; // set the crossOrigin attribute to allow loading the image from a different domain
    backgroundImage.onload = function() {
      backgroundCanvas.width = backgroundImage.width;
      backgroundCanvas.height = backgroundImage.height;
      backgroundContext.drawImage(backgroundImage, 0, 0);
      dataURL = backgroundCanvas.toDataURL('image/jpeg');
      // use the dataURL to generate the PDF
    };

    for (let page = 1; page <= totalPages; page++) {
        doc.setPage(page);
        // doc.addImage(backgroundCanvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        doc.addImage(dataURL, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());


    }




    // Fügen Sie Ihren PDF-Inhalt hier ein
    doc.text(20, 20, `Booking ID: ${formData.bookingID}`);
    doc.text(20, 30, `Datum: ${formData.date}`);
    doc.text(20, 40, `Startzeit: ${formData.start_time}`);
    doc.text(20, 50, `Endzeit: ${formData.end_time}`);
    doc.text(20, 60, `Anzahl Personen: ${formData.groupSize}`);
    doc.text(20, 70, `Catering Art: ${formData.cateringArt}`);
    doc.text(20, 80, `Service: ${formData.service}`);
    doc.text(20, 90, `Getränke: ${formData.drinks}`);
    doc.text(20, 100, `Geschirr: ${formData.Geschirr}`);
    doc.text(20, 110, `Stehpulte: ${formData.Stehpulte}`);
    doc.text(20, 120, `Anzahl Stehpulte: ${formData.stehpulteCount}`);
    doc.text(20, 130, `Mahlzeit: ${formData.meal}`);
    doc.text(20, 140, `Mahlzeit Art: ${formData.mealtime}`);
    doc.text(20, 150, `Preis: ${formData.preis}`);


    // Fügen Sie weitere Felder hinzu

    // Speichern Sie das PDF oder zeigen Sie es im Browser an
    doc.save('catering_anfrage.pdf');


}
