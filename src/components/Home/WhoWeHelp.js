import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/database'

export default function WhoWeHelp() {

    const [fundations, setFundations] = useState(null);
    const [current , setCurrent] = useState("Fundacjom")

    let x = [];
    useEffect(() => {
        const fun = firebase.database().ref().child('fundations');
        fun.on('value', snap => {
          setFundations(snap.val())
        })
    }, [])

    const handleChangeFundation = (e) => {
        const { id } = e.target;
        setCurrent(id)
    }

    const getCurrentFundation = () => fundations?.find(fun => fun.name === current)
    const getPaginatedItems = () => {
        return getCurrentFundation()?.items.sice()
    }
    

    return(
        <div className="section">
            <div className="section_container">
                {fundations?.map(fun => (
                    <button id={fun.name} onClick={handleChangeFundation} key={fun.name}>{fun.name}</button>
                ))}
                <p>{getCurrentFundation()?.desc}</p>
                <ul>
                    {getCurrentFundation()?.items?.map(item => (
                        <li key={item.header}>
                            {item.header}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

