import React from 'react';
import {
    Link
} from "react-router-dom";

export default function FormSecondStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {

    const validateData = () =>{

        if (dataStack.bagsAmount !== "-wybierz-"){
                handleNextPage()
            } else {
                alert('Zaznacz w ile worków chcesz zapakować rzeczy.')
        }
    }

    return(
        <>
            <div className="form_warn">
                <h2>Ważne!</h2>
                <p>
                    Wszystkie rzeczy do oddania zapakuj w 60L worki.
                    Dokładną instrukcję jak poprawnie spakować rzeczy,
                    znajdziesz <Link to="#">TUTAJ</Link>.
                </p>
            </div>

            <div>
                <p>Krok 2/4</p>

                <h2>Podaj liczbę 60L worków, w które spakowałeś/aś rzeczy:</h2>
                
                <div className="">
                    <label>Liczba 60L worków:

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
                    </label>
                </div>
            </div>

            <button onClick={handlePrevPage} className="form_btn">wstecz</button>
            <button onClick={validateData} className="form_btn">dalej</button>
        </>
    )
}