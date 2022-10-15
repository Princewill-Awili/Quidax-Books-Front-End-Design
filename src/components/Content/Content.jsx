import './content.css'
import BookThumbnail from '../BookThumbnail/BookThumbnail'
import { books } from '../../dummyData'
import Section from '../Section/Section'

const Content = () => {
  return (
    <div className='content'>
       <span className="frameTitle">Featured Books</span>
        <div className="frame">
            <div className="carousel">
                {
                  books.map((book,index)=>(
                    <BookThumbnail 
                      key={index} 
                      id={index}
                      img={book.img}
                      title={book.title}
                      ratings={book.ratings}
                      genre = {book.genre}
                      tags= {book.tags}
                      stock={book.stock}
                      followers={book.followers}
                      likes={book.likes}
                      author={book.author}
                      releasedYear={book.releasedYear}
                    />
                  ))
                }
            </div>
        </div>
        <Section title=" Featured Books"/>
    </div>
  )
}

export default Content