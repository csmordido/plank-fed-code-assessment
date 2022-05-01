import '../styles/App.scss';
import { useState } from 'react';
import Wrapper from './Wrapper';
import Header from './Header';
import CaseStudies from './CaseStudies';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <Wrapper>
      <Header 
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <CaseStudies activeCategory={activeCategory}/>
    </Wrapper>
  )
}

export default App;