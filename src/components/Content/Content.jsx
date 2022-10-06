import './content.css'
import BookThumbnail from '../BookThumbnail/BookThumbnail'

const Content = () => {
  return (
    <div className='content'>
        <div className="frame">
            <span className="frameTitle">Featured Books</span>
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