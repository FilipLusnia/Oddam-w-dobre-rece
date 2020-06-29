import React from 'react';

export default function FormFirstStep({handleNextPage, handleCheck, dataStack}) {

    const validateData = () =>{
        if (dataStack.clothes || 
            dataStack.trash || 
            dataStack.toys || 
            dataStack.books || 
            dataStack.other){
                handleNextPage()
            } else {
                alert('Zaznacz conajmniej jedną opcję.')
        }
    }

    return(
        <>
            <div className="form_warn">
                <h2>Ważne!</h2>
                <p>
                    Uzupełnij szczegóły dotyczące twoich rzeczy.
                    Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać. 
                </p>
            </div>
            <div className="form_first_container">
                <p>Krok 1/4</p>

                <h2>Zaznacz co chcesz oddać:</h2>

                <label>
                    <input type="checkbox" 
                        checked={dataStack.clothes}
                        onChange={handleCheck('clothes')}
                    /> 
                    <div className="form_first_checkbox"></div> ubrania, które nadają się do ponownego użycia
                </label>

                <label>
                    <input type="checkbox" 
                        checked={dataStack.trash}
                        onChange={handleCheck('trash')}
                    /> 
                    <div className="form_first_checkbox"></div> ubrania, do wyrzucenia
                </label>

                <label>
                    <input type="checkbox" 
                        checked={dataStack.toys}
                        onChange={handleCheck('toys')}
                    /> 
                    <div className="form_first_checkbox"></div> zabawki
                </label>

                <label>
                    <input type="checkbox" 
                        checked={dataStack.books}
                        onChange={handleCheck('books')}
                    /> 
                    <div className="form_first_checkbox"></div> książki
                </label>

                <label>
                    <input type="checkbox" 
                        checked={dataStack.other}
                        onChange={handleCheck('other')}
                    /> 
                    <div className="form_first_checkbox"></div> inne
                </label>
            </div>
            
            <div className="form_btn_container">
                <button onClick={validateData} className="form_btn">Dalej</button>
            </div>
        </>
    )
}