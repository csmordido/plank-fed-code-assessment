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
    // initialize the animate on scroll library
    Aos.init({
      duration: 1000
    });
  }, []);

  useEffect(() => {
    // checks if the height of the html element is less than the height of the window
    const updateHtmlHeight = () => {
      // if true, sets the html element's height to 100% to fill in the white space
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