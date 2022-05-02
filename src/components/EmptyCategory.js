import '../styles/EmptyCategory.scss';

const EmptyCategory = ({ text }) => {
  return (
    <li 
      id='empty-category' 
      data-aos='fade'
    >
      <p>{text}</p>
    </li> 
  )
}

export default EmptyCategory;