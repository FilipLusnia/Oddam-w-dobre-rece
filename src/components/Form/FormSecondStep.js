import React from 'react';

export default function FormSecondStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {
    return(
        <div>
            <p>Krok 2/4</p>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className="">
                <label>Liczba 60L worków:</label>

                <select className="" 
                    value={dataStack.bagsAmount} 
                    onChange={handleInfo('bagsAmount')}>

                    <option>-wybierz-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <button onClick={handlePrevPage} className="">wstecz</button>
            <button onClick={handleNextPage} className="">dalej</button>
        </div>
    )
}