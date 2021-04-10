import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from "../Firebase/FirebaseIndex"

import decor from '../../assets/Decoration.svg';

export default function WhoWeHelp() {

    const [fundations, setFundations] = useState(null);

    const [currentName, setCurrentName] = useState("Fundacjom")

    const [page, setPage] = useState(1)
    const itemsPerPage = 3;

    const {fbdatabase} = useContext(FirebaseContext);

    useEffect(() => {
        const fund = fbdatabase.ref().child('fundations');
        fund.on('value', snap => {
          setFundations(snap.val())
        })
    }, [fbdatabase])

    //content display logic

    const handleChangeFundation = (e) => {
        setCurrentName(e.target.innerHTML)
        setPage(1);
    }

    const choosenObject = () => fundations?.find(obj => obj.name === currentName)

    const showPaginatedItems = () => {
        const indexOfLastItemOnPage = page * itemsPerPage;
        const indexOfFirstItemOnPage = indexOfLastItemOnPage - itemsPerPage;
        const currentPage = choosenObject()?.items.slice(indexOfFirstItemOnPage, indexOfLastItemOnPage);

        return currentPage?.map((item, index) => (
            <li key={index}
                className="fundations_item">
                <div className="fundations_item_container">
                    <div className="fundations_item_container_headers">
                        <h1>{item.header}</h1>
                        <h2>{item.subheader}</h2>
                    </div>
                <p>{item.desc}</p>
                </div>
            </li>)
        )
    }

    //pagination logic

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(choosenObject()?.items.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const changePage = (e) => {
        setPage(Number(e.target.innerHTML))
    }
    const renderPageNumbers = ()=> {
        return pageNumbers.map(number => 
        <li key={number} 
            onClick={changePage} 
            className="fundations_pages_item"
            style={number === page ? {padding: "9px"} : {border: "none"}}> 
                {number} 
        </li>)
    };
    

    return(
        <div className="fundations">
            <div className="fundations_container">
                {fundations ?
                    <>
                        <h1>Komu pomagamy?</h1>
                        <img src={decor} alt="" className="about_decor"></img>
                        <div className="fundations_btns">
                            {fundations?.map(e => (
                                <button className="fundations_btns_btn" 
                                        onClick={handleChangeFundation} 
                                        key={e.name}
                                        style={e.name === currentName ? null : {border: "none"}}>
                                    {e.name}
                                </button>
                            ))}
                        </div>
                        <p className="fundations_desc"> {choosenObject()?.desc} </p>
                        <ul className="fundations_items"> {showPaginatedItems()} </ul>
                        <ul className="fundations_pages"> {renderPageNumbers()} </ul> 
                    </> 
                :
                    <>            
                        <h1>Komu pomagamy?</h1>
                        <img src={decor} alt="" className="about_decor"></img>
                        <h1>Ładowanie...</h1>    
                    </>
                }   
            </div>
        </div>
    )
}

