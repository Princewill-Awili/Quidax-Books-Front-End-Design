import './section.css'

const Section = ({title, content}) => {
  return (
    <div className='section'>
        <span className="sectionTitle">{title}</span>
        <div className="container">
            {content}
        </div>
    </div>
  )
}

export default Section