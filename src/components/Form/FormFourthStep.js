import React from 'react';

export default function FormFourthStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {
    return(
        <>
            <div className="">
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>

            <p>Krok 4/4</p>

            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <div className="">
                <div className="">
                    <h3>Adres odbioru:</h3>
                    <div>
                        <label>
                            Ulica
                            <input type="text" value={dataStack.street}
                                onChange={handleInfo('street')}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Miasto
                            <input type="text" value={dataStack.city}
                                onChange={handleInfo('city')}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Kod pocztowy
                            <input type="text" value={dataStack.zipCode}
                                onChange={handleInfo('zipCode')}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Numer telefonu
                            <input type="tel" value={dataStack.phone}
                                onChange={handleInfo('phone')}/>
                        </label>
                    </div>
                </div>

                <div>
                    <h3>Termin odbioru:</h3>
                    <div>
                        <label>
                            Data
                            <input type="date" value={dataStack.date}
                                onChange={handleInfo('date')}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Godzina
                            <input type="text" value={dataStack.time}
                                onChange={handleInfo('time')}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Uwagi dla kuriera
                            <textarea rows="8" value={dataStack.courierNotes}
                                    onChange={handleInfo('courierNotes')}/>
                        </label>
                    </div>
                </div>

            </div>
        

            <button onClick={handlePrevPage} className="">wstecz</button>
            <button onClick={handleNextPage} className="">dalej</button>
        </>
    )
}