import React from 'react';

export default function FormSummary({handleNextPage, handlePrevPage}) {
    return(
        <div>
           5 
            <button onClick={handlePrevPage}>wstecz</button>
            <button onClick={handleNextPage}>Potwierdzam</button>
        </div>
    )
}