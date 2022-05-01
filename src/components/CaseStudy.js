import { ReactComponent as Arrow } from '../assets/arrow-icon.svg';
import placeholder from '../assets/placeholder-image.jpg';

const CaseStudy = ({ caseStudy }) => {
  return (
    <li className='case-study'>
      <figure className='case-study-img'>
        <img src={caseStudy.thumbnail || placeholder} alt={caseStudy.title}/>
      </figure>
      <div className='case-study-details'>
        <h2 className='case-study-category'>{caseStudy.categories[0].title}</h2>
        <h3 className='case-study-title'>{caseStudy.title}</h3>
        <figcaption className='case-study-text'>{caseStudy.excerpt}</figcaption>
        <a href={caseStudy.link} className='case-study-link'>
          View case study
          <Arrow />
        </a>
      </div>
    </li>
  )
}

export default CaseStudy;