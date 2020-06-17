import React, {useState, useContext, useEffect} from 'react';

export default function FormSecondStep({handleNextPage, handlePrevPage}) {
    return(
        <div>
            2
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}