import React from 'react';

import decor from '../../assets/Decoration.svg';

export default function FormThankYou() {

    return(
        <div className="form_thankyou_container">
            <p>
                Dziękujemy za przesłanie formularza.<br/> 
                Na maila prześlemy wszelkie <br/>  informacje o odbiorze.
            </p>
            <img src={decor} alt=""/>
        </div>
    )
}