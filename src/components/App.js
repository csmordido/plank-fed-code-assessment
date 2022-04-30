import '../styles/App.scss';
import useApiResponse from '../hooks/useApiResponse';
import Wrapper from './Wrapper';
import Header from './Header';

const App = () => {
  const caseStudiesArr = useApiResponse('case-studies');
  

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default App;