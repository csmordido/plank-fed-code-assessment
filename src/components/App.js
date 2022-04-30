import '../styles/App.scss';
import useApiResponse from '../hooks/useApiResponse';

const App = () => {
  const caseStudiesArr = useApiResponse('case-studies');
  const categoriesArr = useApiResponse('categories');
  

  return (
    <h1>Hello</h1>
  )
}

export default App;