import React from 'react';

export default function FormFirstStep({handleNextPage, handleCheck, dataStack}) {

    return(
        <>
            <div>
                <p className="">Krok 1/4</p>

                <h2 className="">Zaznacz co chcesz oddać:</h2>

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
                        checked={dataStack.clothesCheck}
                        onChange={handleCheck('booksCheck')}
                    />
                </label>

                <label className="">Inne
                    <input type="checkbox" 
                        checked={dataStack.clothesCheck}
                        onChange={handleCheck('otherCheck')}
                    />
                </label>
            </div>
            <button onClick={handleNextPage} className="">dalej</button>
        </>
    )
}