import useApiResponse from '../hooks/useApiResponse';
import '../styles/Header.scss';

const Header = ({ setActiveCategory, activeCategory }) => {
  const categoriesArr = useApiResponse('categories');
  
  const renderCategories = () => {
    const allCategory = {
      title: "All",
      slug: "all",
    }
    // adds an "All" category to the categories array
    const combinedCategoriesArr = [allCategory, ...categoriesArr];

    return combinedCategoriesArr.map((category) => {
      // determines the active category to remove or add the 'active' class
      const isActive = activeCategory === category.slug ? 'active' : '';
      return <li key={category.slug}><button className={`category-button ${isActive}`} type="button" value={category.slug}>{category.title}</button></li>
    });
  };

  return (
    <header>
      <h1 id='page-title' data-aos='slide-right'>Work</h1>
      <nav>
        <ul 
          id='category-buttons-container' 
          onClick={ (event) => {setActiveCategory(event.target.value)} }
          data-aos='fade'
          data-aos-delay='500'
        >
          {renderCategories()}
        </ul>
      </nav>
    </header>
  )
};

export default Header;