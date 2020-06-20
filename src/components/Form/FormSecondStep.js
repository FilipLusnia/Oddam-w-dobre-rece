import React from 'react';

export default function FormSecondStep({handleNextPage, handlePrevPage, handleInfo}) {
    return(
        <div>
            2
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}