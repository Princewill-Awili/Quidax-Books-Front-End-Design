import { useState, useContext } from 'react';
import './topbar.scss';
import {TbBooks} from 'react-icons/tb'
import {FiSearch } from 'react-icons/fi'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'
import {IoClose as Close} from 'react-icons/io5'

import { states } from '../../context';


const Topbar = () => {

    const {query, setQuery, cartMode, setCartMode} = useContext(states);
    const [searchMode, setSearchMode] = useState(false);
    const[dropHeight,setDropHeight] = useState(false);


  return (
    <div className='topbar'>

        <div className="tbLeft">
            <div className="logoIconWrapper">
                <TbBooks className='logoIcon'/>
            </div>
            
            <div className="logoText">
                <span className="logoName">Quidax Books</span>
                <span className="logoCaption">A flimsy book company</span>
            </div>
        </div>

        <div className="tbCenter">
            <div className="searchBarWrapper">
                <input 
                    type="text" 
                    className="searchBar" 
                    placeholder='Search books, authors, genres, etc.' 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="searchIconWrapper">
                    {query.length === 0 && (<FiSearch  className='searchIcon'/>)}
                        {
                            query.length > 0 && (
                                                    <Close 
                                                        className='searchIcon' 
                                                        onClick = {()=> {
                                                            setSearchMode(!searchMode);
                                                            setQuery('');
                                                        }}/>
                                                )
                        }
                </div>
            </div>
        </div>
        <div className="tbRight">

            <div className="mobileIcons">
                <FiSearch 
                    className='mbIcons cartIcon' 
                    onClick={()=>{
                        setSearchMode(!searchMode);
                        setDropHeight(!dropHeight)
                    }}
                />
                <TbBooks className='mbIcons cartIcon'/>
                <div className="cartIconWrapper" onClick={()=> setCartMode(!cartMode)}>
                    <CartIcon className='mbIcons cartIcon'/>
                    <div className="iconBubble">2</div>
                </div>
                
            </div>

            <div className="logo2IconWrapper">
                <TbBooks className='logo2Icon'/>
            </div>

            <div 
                className="cartContainer" 
                onClick={()=>setCartMode(!cartMode)}
            >
                <CartIcon className='mainCartIcon'/>
                <div className="mainCartBubble">2</div>
            </div>
        </div>

        {
           searchMode && (
            <div className="mobileSearch" style={{animationName: dropHeight ? "dropHeight" : "liftHeight"}}>
                <BiArrowBack  
                    className='arrowBack' 
                    onClick={()=>{
                        setDropHeight(!dropHeight);
                        setTimeout(()=>{
                            setSearchMode(!searchMode)
                        },300)
                        
                    }} 
                />
                <div className="mobileSearchBarWrapper">
                    <input 
                        type="text" 
                        className="mobileSearchBar" 
                        placeholder='Books, authors, genres, etc.'
                        value={query}
                        onChange = {(e)=> setQuery(e.target.value)}
                    />
                    <div className="mobileSearchIconWrapper">
                        
                        {query.length === 0 && (<FiSearch  className='mobileSearchIcon'/>)}
                        {
                            query.length > 0 && (
                                                    <Close 
                                                        className='mobileSearchIcon' 
                                                        onClick = {()=> setSearchMode(!searchMode)}/>
                                                )
                        }
                    </div>
                </div>
            </div>
           ) 
        }

        
    </div>
  )
}

export default Topbar