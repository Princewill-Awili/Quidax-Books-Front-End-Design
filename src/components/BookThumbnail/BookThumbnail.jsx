import './bookthumbnail.scss'
import {MdPeopleOutline as People} from 'react-icons/md'
import {AiOutlineHeart as Likes ,AiFillStar as Rating} from 'react-icons/ai'


const BookThumbnail = () => {
  return (
    <div className='bookthumbnail'>
        <div className="bookInfo">
          <span className='stock'>Available</span>

          <p className='bookTitle'>Big Magic: How to Live a Creative Life</p>
          <span className="author">Elizabeth Gilbert</span>
          <span className="year">2015</span>

          <p className="properties">Genre</p>
          <span className='answer'>Motivational</span>

          <p className="properties">Tags</p>
          <span className="answer">Creativity, Better Living</span>

          <div className="iconsBar">
            <div className="iconsBarLeft">
              <div className="iconsContainer">
                <People className='bookIcons'/>
                <span className="number">31</span>
              </div>
              <div className="iconsContainer">
                <Likes className='bookIcons'/>
                <span className="number">29</span>
              </div>
            </div>

            <div className="iconsBarCenter"></div>

            <div className="iconsBarRight">
            <span className="rating">Ratings: 4.0</span>
            <div className="rContainer">
              <Rating className='filled'/>
              <Rating className='filled'/>
              <Rating className='filled'/>
              <Rating className='filled'/>
              <Rating className='unfilled'/>
            </div>
          </div>
          </div>

          
        </div>
    </div>
  )
}

export default BookThumbnail