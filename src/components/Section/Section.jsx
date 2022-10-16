import './section.css'
import { books } from '../../dummyData'
import BookThumbnail from '../BookThumbnail/BookThumbnail'
import BookTile from '../BookTile/BookTile'


const Section = ({title, contentType}) => {
  return (
    <div className='section'>
        <span className="sectionTitle">{title}</span>
        <div className="container">
            {contentType === 'slider' && (
              <div className='carousel'>
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
            )}
            {
              contentType === "tiles" && (
                <div className="tilesWrapper">
                  {books.map((book,index)=>(
                    <BookTile
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
                      price = {book.price}
                     />
                  ))}

                  {books.map((book,index)=>(
                    <BookTile
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
                      price = {book.price}
                     />
                  ))}

                  {books.map((book,index)=>(
                    <BookTile
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
                      price = {book.price}
                     />
                  ))}

                  {books.map((book,index)=>(
                    <BookTile
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
                      price = {book.price}
                     />
                  ))}
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Section