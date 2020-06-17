import React, {useState, useContext, useEffect} from 'react';

export default function FormFourthStep({handleNextPage, handlePrevPage}) {
    return(
        <div>
            4
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}