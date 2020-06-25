import React from 'react';

export default function FormThirdStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {
    return(
        <>
            <div className="">
                <h2>Ważne!</h2>
                <p>
                    Jeśli wiesz, komu chcesz pomóc, 
                    możesz wpisać nazwę tej organizacji w wyszukiwarce.
                    Możesz też filtrować organizacje <br/>
                    po ich lokalizacji bądź celu ich pomocy.
                </p>
            </div>

            <p>Krok 3/4</p>

            <label>Lokalizacja:
                <div>
                    <select className="" value={dataStack.localization}
                            onChange={handleInfo('localization')}>
                        <option value="-wybierz-">-wybierz-</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
            </label>

            <h2>Komu chcesz pomóc?</h2>

            <div className="">
                <label className="">Dzieciom
                    <input type="radio"
                        value="Dzieciom"
                        checked={dataStack.targetGroup === "dzieciom"}
                        onChange={handleInfo('targetGroup')}/>
                </label>

                <label className="">Samotnim matkom
                    <input type="radio"
                        value="Samotnim matkom"
                        checked={dataStack.targetGroup === "samotnym matkom"}
                        onChange={handleInfo('targetGroup')}/>
                </label>

                <label className="">Bezdomnym
                    <input type="radio"
                        value="Bezdomnym"
                        checked={dataStack.targetGroup === "bezdomnym"}
                        onChange={handleInfo('targetGroup')}/>
                </label>

                <label className="">Niepełnosprawnym
                    <input type="radio" 
                        value="Niepełnosprawnym"
                        checked={dataStack.targetGroup === "niepełnosprawnym"}
                        onChange={handleInfo('targetGroup')}/>
                </label>

                <label className="">Osobom starszym
                    <input type="radio"
                        value="Osobom starszym"
                        checked={dataStack.targetGroup === "osobom starszym"}
                        onChange={handleInfo('targetGroup')}/>
                </label>
            </div>

            <label> Wpisz nazwę konkretnej organizacji (opcjonalnie)
                <input className="" type="text"
                    value={dataStack.organization}
                    onChange={handleInfo('organization')}/>
            </label>
            

            <button onClick={handlePrevPage} className="">wstecz</button>
            <button onClick={handleNextPage} className="">dalej</button>
        </>
    )
}