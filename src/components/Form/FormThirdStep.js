import React, {useState, useContext, useEffect} from 'react';

export default function FormThirdStep({handleNextPage, handlePrevPage}) {
    return(
        <div>
            3
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}