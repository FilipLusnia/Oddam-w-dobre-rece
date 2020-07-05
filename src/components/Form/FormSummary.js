import React from 'react';

import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-4.svg';

export default function FormSummary({handleNextPage, handlePrevPage, dataStack}) {
    return(
        <>
            <div className="form_summary_container">
                <h2>Podsumowanie Twojej darowizny</h2>

                <h3>Oddajesz:</h3>
                <div className="form_summary_content">
                    <img src={icon1} alt=""/>
                    <p>Ilość worków: {dataStack.bagsAmount}, 
                        {dataStack.clothes && " ubrania do ponownego użycia, "}
                        {dataStack.trash && " ubrania do wyrzucenia, "}
                        {dataStack.toys && " zabawki, "}
                        {dataStack.books && " książki, "}
                        {dataStack.other && " inne, "}
                        {dataStack.targetGroup && `${dataStack.targetGroup}`}
                    </p>
                </div>
                <div className="form_summary_localization">
                    <img src={icon2} alt=""/>
                    <p>dla lokalizacji: {dataStack.localization}</p>
                </div>

                {dataStack.organization? 
                    <p className="form_summary_organization">
                        <span>Nazwa wybranej organizacji: </span>
                        {dataStack.organization && ` ${dataStack.organization}`}
                    </p>
                :
                    null
                }

                <div className="form_summary_data_container">
                    <div className="form_summary_adress">
                        <h3>Adres odbioru</h3>
                        <p><span>Ulica</span> {dataStack.street}</p>
                        <p><span>Miasto</span> {dataStack.city}</p>
                        <p><span>Kod <br/> pocztowy</span> {dataStack.zipCode}</p>
                        <p><span>Numer <br/> telefonu</span> {dataStack.phone}</p>
                    </div>
                    <div className="form_summary_duedate">
                        <h3>Termin odbioru</h3>
                        <p><span>Data</span> {dataStack.date}</p>
                        <p><span>Godzina</span> {dataStack.time}</p>
                        {dataStack.courierNotes && 
                            <div className="form_summary_notes">
                                <span>Uwagi <br/> dla kuriera</span>
                                <p>{dataStack.courierNotes}</p>
                            </div>
                        }
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