import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/database'

export default function WhoWeHelp() {

    const [fundations, setFundations] = useState(null);

    const [currentName, setCurrentName] = useState("Fundacjom")

    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(3)

    useEffect(() => {
        const fund = firebase.database().ref().child('fundations');
        fund.on('value', snap => {
          setFundations(snap.val())
        })
    }, [])

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
            <li key={index}>
                {item.header}
                {item.subheader}
                {item.desc}
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
        return pageNumbers.map(number => <li key={number} onClick={changePage}> {number} </li>)
    };
    

    return(
        <div className="section">
            <div className="section_container">
                {fundations?.map(e => (
                    <button onClick={handleChangeFundation} key={e.name}>{e.name}</button>
                ))}
                <p> {choosenObject()?.desc} </p>
                <ul> {showPaginatedItems()} </ul>
                <ul> {renderPageNumbers()} </ul>     
            </div>
        </div>
    )
}

