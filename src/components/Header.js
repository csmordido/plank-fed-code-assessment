import useApiResponse from '../hooks/useApiResponse';
import '../styles/Header.scss';

const Header = ({ setActiveCategory, activeCategory }) => {
  const categoriesArr = useApiResponse('categories');

  const allCategory = {
    title: "All",
    slug: "all",
  }

  const combinedCategoriesArr = [allCategory, ...categoriesArr];

  const renderCategories = () => {
    return combinedCategoriesArr.map((category, index) => {
      const isActive = activeCategory === category.slug ? 'active' : '';
      return <li key={index}><button className={`category-button ${isActive}`} type="button" value={category.slug}>{category.title}</button></li>
    });
  };

  return (
    <header>
      <h1 id='page-title'>Work</h1>
      <nav>
        <ul id='category-buttons-container' onClick={ (event) => {setActiveCategory(event.target.value)} }>
          {renderCategories()}
        </ul>
      </nav>
    </header>
  )
};

export default Header;