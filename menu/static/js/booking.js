// const bookNowButton = document.getElementById('book-now');

// bookNowButton.addEventListener('click', () => {
//     fetch('/generate-pdf/', {
//         method: 'GET',
//     })
//     .then(response => response.blob())
//     .then(blob => {
//         // Create a temporary anchor element to trigger the download
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'booking.pdf';
//         a.click();
//         window.URL.revokeObjectURL(url);
//     });
// });
