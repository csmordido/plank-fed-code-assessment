import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Wrapper from './Wrapper';
import Header from './Header';
import CaseStudies from './CaseStudies';
import '../styles/App.scss';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 1000
    });
  }, []);

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