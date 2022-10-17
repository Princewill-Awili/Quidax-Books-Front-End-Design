import './mainpage.scss'
import Topbar from '../Topbar/Topbar'
import Cart from '../Cart/Cart'
import Content from '../Content/Content'

import { useContext } from 'react'
import { states } from '../../context'

import {BrowserRouter as Router} from "react-router-dom"

const MainPage = () => {

    const {cartMode} = useContext(states);
  return (
    <div className='mainpage'>
        <Topbar/>
        <Router>
            <Content/>
        </Router>

        {cartMode && (<Cart/>)}
        
        { cartMode && (
            <div className="film"></div>
        )}
    </div>
  )
}

export default MainPage