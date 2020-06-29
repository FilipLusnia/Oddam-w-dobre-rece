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

                <label className="form_first_input">ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" 
                        checked={dataStack.clothes}
                        onChange={handleCheck('clothes')}
                    />
                </label>

                <label className="form_first_input">ubrania, do wyrzucenia
                    <input type="checkbox" 
                        checked={dataStack.trash}
                        onChange={handleCheck('trash')}
                    />
                </label>

                <label className="form_first_input">zabawki
                    <input type="checkbox" 
                        checked={dataStack.toys}
                        onChange={handleCheck('toys')}
                    />
                </label>

                <label className="form_first_input">książki
                    <input type="checkbox" 
                        checked={dataStack.books}
                        onChange={handleCheck('books')}
                    />
                </label>

                <label className="form_first_input">inne
                    <input type="checkbox" 
                        checked={dataStack.other}
                        onChange={handleCheck('other')}
                    />
                </label>
            </div>
            
            <div className="form_btn_container">
                <button onClick={validateData} className="form_btn">Dalej</button>
            </div>
        </>
    )
}