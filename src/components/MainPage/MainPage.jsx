import './mainpage.scss'
import Topbar from '../Topbar/Topbar'
import Cart from '../Cart/Cart'

import { useContext } from 'react'
import { states } from '../../context'

const MainPage = () => {

    const {cartMode, setCartMode} = useContext(states);
  return (
    <div className='mainpage'>
        <Topbar/>

        {cartMode && (<Cart/>)}
        
        { cartMode && (
            <div className="film"></div>
        )}
    </div>
  )
}

export default MainPage