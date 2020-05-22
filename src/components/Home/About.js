import React from 'react';

import image from '../../assets/People.jpg';
import decor from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';


export default function About() {
    return (
        <div className="about">
            <div className="about_container">
                <div className="about_text">
                    <h1>O nas</h1>
                    <img src={decor} alt="" className="about_decor"></img>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} alt="" className="about_signature"></img>                </div>
            </div>
            <img src={image} alt="" className="about_img"></img>
        </div>
    )
}