import React from 'react';

export default function FormSummary({handleNextPage, handlePrevPage, dataStack}) {
    return(
        <>
            <div className="form_summary_container">
                <h2>Podsumowanie Twojej darowizny</h2>

                <h3 className="">Oddajesz:</h3>
                <p className="">Ilość worków: {dataStack.bagsAmount}, 
                    {dataStack.clothes && " ubrania do ponownego użycia, "}
                    {dataStack.trash && " ubrania do wyrzucenia, "}
                    {dataStack.toys && " zabawki, "}
                    {dataStack.books && " książki, "}
                    {dataStack.other && " inne, "}
                    {dataStack.targetGroup && `${dataStack.targetGroup}`}
                </p>

                <p className="">dla lokalizacji: {dataStack.localization}</p>

                <p className="">
                    Nazwa wybranej organizacji:
                    {dataStack.organization && ` ${dataStack.organization}`}
                </p>

                <div className="">
                    <div className="">
                        <h3 className="">Adres odbioru:</h3>
                        <p><strong>Ulica:</strong> {dataStack.street}</p>
                        <p><strong>Miasto:</strong> {dataStack.city}</p>
                        <p><strong>Kod pocztowy:</strong> {dataStack.zipCode}</p>
                        <p><strong>Numer telefonu:</strong> {dataStack.phone}</p>
                    </div>
                    <div className="">
                        <h3 className="">Termin odbioru:</h3>
                        <p><strong>Data:</strong> {dataStack.date}</p>
                        <p><strong>Godzina:</strong> {dataStack.time}</p>
                        {dataStack.courierNotes && <p><strong>Uwagi dla kuriera:</strong> {dataStack.courierNotes}</p>}
                    </div>
                </div>
            </div> 

            <div className="form_btn_container">
                <button onClick={handlePrevPage} className="form_btn">Wstecz</button>
                <button onClick={handleNextPage} className="form_btn">Potwierdzam</button>
            </div>
        </>
    )
}