import './topbar.scss';
import {TbBooks} from 'react-icons/tb'
import {FiSearch } from 'react-icons/fi'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'


const Topbar = () => {
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
                <input type="text" className="searchBar" placeholder='Search books, authors, genres, etc.' />
                <div className="searchIconWrapper">
                    <FiSearch className='searchIcon'/>
                </div>
            </div>
        </div>
        <div className="tbRight">

            <div className="mobileIcons">
                <FiSearch className='mbIcons cartIcon'/>
                <TbBooks className='mbIcons cartIcon'/>
                <div className="cartIconWrapper">
                    <CartIcon className='mbIcons cartIcon'/>
                    <div className="iconBubble">2</div>
                </div>
            </div>

            <div className="logo2IconWrapper">
                <TbBooks className='logo2Icon'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar