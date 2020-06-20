import React from 'react';

export default function FormFourthStep({handleNextPage, handlePrevPage, handleInfo}) {
    return(
        <div>
            4
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}