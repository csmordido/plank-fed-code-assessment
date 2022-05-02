import { ReactComponent as Arrow } from '../assets/arrow-icon.svg';
import placeholder from '../assets/placeholder-image.jpg';
import '../styles/CaseStudy.scss';

const CaseStudy = ({ caseStudy }) => {

  const info = {
    thumbnail: caseStudy.thumbnail || placeholder,
    title: caseStudy.title || <i>Title not available</i>,
    category: caseStudy.categories[0].title || <i>Category not available</i>,
    excerpt: caseStudy.excerpt || <i>Excerpt not available</i>,
    link: caseStudy.link || '#'
  }

  return (
    <li className='case-study' data-aos='fade-up'>
      <figure className='case-study-img'>
        <img src={info.thumbnail} alt={info.title}/>
      </figure>
      <div className='case-study-details'>
        <h2 className='case-study-category'>{info.category}</h2>
        <h3 className='case-study-title'>{info.title}</h3>
        <figcaption className='case-study-text'>{info.excerpt}</figcaption>
        <div className='case-study-link-container'>
          <a href={info.link} className='case-study-link'>
            View case study
            <Arrow className='case-study-link-arrow'/>
          </a>
        </div>
      </div>
    </li>
  )
}

export default CaseStudy;