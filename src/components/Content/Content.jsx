import './content.css'
import Section from '../Section/Section'


const Content = () => {
  return (
    <div className='content'>
        <Section title=" Featured Books" contentType="slider"/>
        <Section title="All Books" contentType="tiles"/>
    </div>
  )
}

export default Content