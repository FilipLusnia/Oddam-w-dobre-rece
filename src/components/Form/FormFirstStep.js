import React from 'react';

export default function FormFirstStep({handleNextPage, handleCheck, dataStack}) {

    return(
        <>
            <div>
                <div className="">
                    <h2>Ważne!</h2>
                    <p>
                        Uzupełnij szczegóły dotyczące twoich rzeczy.
                        Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać. 
                    </p>
                </div>

                <p>Krok 1/4</p>

                <h2>Zaznacz co chcesz oddać:</h2>

                <label className="">ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" 
                        checked={dataStack.clothesCheck}
                        onChange={handleCheck('clothesCheck')}
                    />
                </label>

                <label className="">ubrania, do wyrzucenia
                    <input type="checkbox" 
                        checked={dataStack.trashClothesCheck}
                        onChange={handleCheck('trashClothesCheck')}
                    />
                </label>

                <label className="">zabawki
                    <input type="checkbox" 
                        checked={dataStack.toysCheck}
                        onChange={handleCheck('toysCheck')}
                    />
                </label>

                <label className="">książki
                    <input type="checkbox" 
                        checked={dataStack.booksCheck}
                        onChange={handleCheck('booksCheck')}
                    />
                </label>

                <label className="">Inne
                    <input type="checkbox" 
                        checked={dataStack.otherCheck}
                        onChange={handleCheck('otherCheck')}
                    />
                </label>
            </div>
            <button onClick={handleNextPage} className="">dalej</button>
        </>
    )
}