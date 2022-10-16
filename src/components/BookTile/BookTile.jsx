import './booktile.css'

import {MdPeopleOutline as People} from 'react-icons/md'
import {AiOutlineHeart as Likes ,AiFillStar as Rating} from 'react-icons/ai'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import { states } from '../../context'
import { useContext } from 'react'



const BookTile = ({id,img,title,author,releasedYear,genre, followers,likes,ratings,price,stock}) => {

  const ratingFunc = (ratingsNum) => {
    const numUnfilled = Math.floor(5 - ratingsNum);
    const numFilled = Math.floor(ratingsNum);
    return [numFilled,numUnfilled];
  }

  const [filled,unfilled] = ratingFunc(ratings);

  const { setCart, books } = useContext(states);

  const addToCart = (e) => {
    const selectedItem = books.find(item => item.id === e.target.id);
    setCart(selectedItem);
  }

  const openBook = (e) => {
    
  }


  return (
    <div className='booktile' onClick={(e)=> openBook(e)} id={id}>
        <div className="left">
            <img src={img} alt="bookImg" className='bookImg' />
        </div>
        <div className="right">
            <h5 className='title'>{title}</h5>
            <p className='auth'>{author} - {releasedYear}</p>
            <p className="genre">{genre}</p>

            <div className="midSection">
                <div className="icons">
                  <div className="followers">
                    <People/>
                    <span>{followers}</span>
                  </div>
                  <div className="likes">
                    <Likes/>
                    <span>{likes}</span>
                  </div>
                </div>
                <div className="ratings">
                  <span>Rating: {ratings}</span>
                  <div className="rContainer">
                    {[...Array(filled)].map((x,index) => (
                      <Rating key={`${index}filled`} className="filled"/>
                    ))}
                    {[...Array(unfilled)].map((y,index)=>(
                      <Rating key={`${index}unfilled`} className="unfilled"/>
                    ))}
                  </div>
                </div>
            </div>

            <p className="priceAndStock">
              <span className='price'>${price}</span>
              <span className="stock" style={{color: stock>0 ? "#78C920" : "#ED3F40"}}>
                {stock > 0 ? `${stock} copies available` : `Out of Stock`}
              </span>
            </p>

            <div className="addToCart" id={id} onClick={(e)=> addToCart(e)}>
              <CartIcon id={id} onClick={(e)=> addToCart(e)}/>
              <span className="add" id={id} onClick={(e)=> addToCart(e)}>Add to Cart</span>
            </div>
        </div>
    </div>
  )
}

export default BookTile