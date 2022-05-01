import '../styles/EmptyCategory.scss';

const EmptyCategory = ({ text }) => {
  return (
    <li id='empty-category'>
      <p>{text}</p>
    </li> 
  )
}

export default EmptyCategory;