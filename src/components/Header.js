import useApiResponse from '../hooks/useApiResponse';
import '../styles/Header.scss';

const Header = ({ setActiveCategory }) => {
  const categoriesArr = useApiResponse('categories');

  const renderCategories = () => {
    return categoriesArr.map((category, index) => {
      return <li key={index}><button className='category-button' type="button" value={category.slug}>{category.title}</button></li>
    });
  };

  return (
    <header>
      <h1 id='page-title'>Work</h1>
      <nav>
        <ul id='category-buttons-container' onClick={ (event) => {setActiveCategory(event.target.value)} }>
          <li><button className='category-button' type="button" value="all">All</button></li>
          {renderCategories()}
        </ul>
      </nav>
    </header>
  )
};

export default Header;