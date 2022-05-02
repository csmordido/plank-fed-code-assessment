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

  useEffect(() => {
    const updateHtmlHeight = () => {
      if (window.innerHeight > document.body.scrollHeight && activeCategory !== 'all') {
        document.documentElement.style.height = '100%';
      } else {
        document.documentElement.style.height = '';
      }
    }

    updateHtmlHeight();
  }, [activeCategory]);

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