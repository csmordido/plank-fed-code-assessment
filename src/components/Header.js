import useApiResponse from "../hooks/useApiResponse";

const Header = ({ setActiveCategory }) => {
  const categoriesArr = useApiResponse('categories');

  const renderCategories = () => {
    return categoriesArr.map((category, index) => {
      return <li key={index}><button type="button" value={category.slug}>{category.title}</button></li>
    });
  };

  return (
    <header>
      <h1>Work</h1>
      <nav>
        <ul onClick={ (event) => {setActiveCategory(event.target.value)} }>
          <li><button type="button" value="all">All</button></li>
          {renderCategories()}
        </ul>
      </nav>
    </header>
  )
};

export default Header;