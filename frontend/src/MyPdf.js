import jsPDF from 'jspdf';

export function generatePDF(formData) {
    const doc = new jsPDF();

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



