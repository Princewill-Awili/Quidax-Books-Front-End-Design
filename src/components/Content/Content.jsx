import './content.css'
import Section from '../Section/Section'
import {Routes, Route} from 'react-router-dom'
import BookPage from '../BookPage/BookPage'


const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path="/" element={
          <>
            <Section title=" Featured Books" contentType="slider"/>
            <Section title="All Books" contentType="tiles"/>
          </>
        }/>

        <Route path="/book" element={<BookPage/>}/>
      </Routes>
        
    </div>
  )
}

export default Content