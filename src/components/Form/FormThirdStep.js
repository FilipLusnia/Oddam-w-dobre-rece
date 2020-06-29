import React from 'react';

export default function FormThirdStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {

    const validateData = () =>{
        
        if (dataStack.localization === "-wybierz-"){
            alert("Wybierz lokalizację. ")
        } else if (!dataStack.targetGroup){
            alert("Zaznacz conajmniej jedną grupę odbiorców. ")
        } else {
            handleNextPage();
        }
    }

    return(
        <>
            <div className="form_warn">
                <h2>Ważne!</h2>
                <p>
                    Jeśli wiesz, komu chcesz pomóc, 
                    możesz wpisać nazwę tej organizacji w wyszukiwarce.
                    Możesz też filtrować organizacje <br/>
                    po ich lokalizacji bądź celu ich pomocy.
                </p>
            </div>

            <div className="form_third_container">
                <p>Krok 3/4</p>

                <h2>Lokalizacja:</h2>
                    <div>
                        <select className="form_third_select" value={dataStack.localization}
                                onChange={handleInfo('localization')}>
                            <option value="-wybierz-">- wybierz -</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </div>

                <h3>Komu chcesz pomóc?</h3>

                <div className="form_third_radio_container-first">
                    <label className="form_third_radio">Dzieciom
                        <input type="radio"
                            value="dzieciom"
                            checked={dataStack.targetGroup === "dzieciom"}
                            onChange={handleInfo('targetGroup')}/>
                        <span className="form_third_radio_selector"/>
                    </label>

                    <label className="form_third_radio">Samotnym matkom
                        <input type="radio"
                            value="samotnym matkom"
                            checked={dataStack.targetGroup === "samotnym matkom"}
                            onChange={handleInfo('targetGroup')}/>
                        <span className="form_third_radio_selector"/>
                    </label>

                    <label className="form_third_radio">Bezdomnym
                        <input type="radio"
                            value="bezdomnym"
                            checked={dataStack.targetGroup === "bezdomnym"}
                            onChange={handleInfo('targetGroup')}/>
                        <span className="form_third_radio_selector"/>
                    </label>
                </div>

                <div className="form_third_radio_container-second">
                    <label className="form_third_radio">Niepełnosprawnym
                        <input type="radio" 
                            value="niepełnosprawnym"
                            checked={dataStack.targetGroup === "niepełnosprawnym"}
                            onChange={handleInfo('targetGroup')}/>
                        <span className="form_third_radio_selector"/>
                    </label>

                    <label className="form_third_radio">Osobom starszym
                        <input type="radio"
                            value="osobom starszym"
                            checked={dataStack.targetGroup === "osobom starszym"}
                            onChange={handleInfo('targetGroup')}/>
                        <span className="form_third_radio_selector"/>
                    </label>
                </div>

                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input className="form_third_company" type="text"
                        value={dataStack.organization}
                        onChange={handleInfo('organization')}/>
            </div>
            
            <div className="form_btn_container">
                <button onClick={handlePrevPage} className="form_btn">Wstecz</button>
                <button onClick={validateData} className="form_btn">Dalej</button>
            </div>
        </>
    )
}