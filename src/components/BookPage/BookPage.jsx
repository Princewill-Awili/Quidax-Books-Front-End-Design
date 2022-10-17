import './bookpage.css'
import { useState } from 'react'

const BookPage = () => {
    const [book, setBook] = useState(JSON.parse(localStorage.getItem('selectedBook')))

    
  return (
    <div className='bookpage'>
        <div className="pageWrapper">
            .pageLeft
        </div>
    </div>
  )
}

export default BookPage