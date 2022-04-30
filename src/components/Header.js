import useApiResponse from "../hooks/useApiResponse";

const Header = () => {
  const categoriesArr = useApiResponse('categories');

  const renderCategories = () => {
    return categoriesArr.map((category, index) => {
      return <li key={index}><button type="button">{category.title}</button></li>
    });
  };

  return (
    <header>
      <h1>Work</h1>
      <nav>
        <ul>
          <li><button type="button">All</button></li>
          {renderCategories()}
        </ul>
      </nav>
    </header>
  )
};

export default Header;