import './content.css'
import '../BookThumbnail/bookthumbnail.scss'
import BookThumbnail from '../BookThumbnail/BookThumbnail'

const Content = () => {
  return (
    <div className='content'>
       <span className="frameTitle">Featured Books</span>
        <div className="frame">
            <div className="carousel">
                <BookThumbnail/>
                <BookThumbnail/>
                <BookThumbnail/>
                <BookThumbnail/>
                <BookThumbnail/>
                <BookThumbnail/>
            </div>
        </div>
    </div>
  )
}

export default Content