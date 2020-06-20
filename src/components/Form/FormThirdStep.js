import React from 'react';

export default function FormThirdStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {
    return(
        <div>
            3
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}