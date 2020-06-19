import React, {useState, useContext, useEffect} from 'react';

export default function FormFirstStep({handleNextPage}) {


    return(
        <div>
            <button onClick={handleNextPage}>dalej</button>
        </div>
    )
}