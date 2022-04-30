import { ReactComponent as Arrow } from '../assets/arrow-icon.svg';
import placeholder from '../assets/placeholder-image.jpg';

const CaseStudy = ({ caseStudy }) => {
  return (
    <li className='case-study-container'>
      <figure>
        <img src={caseStudy.thumbnail || placeholder} alt={caseStudy.title}/>
      </figure>
      <div className='case-study-details'>
        <h2>{caseStudy.categories[0].title}</h2>
        <h3>{caseStudy.title}</h3>
        <figcaption>{caseStudy.excerpt}</figcaption>
        <a href={caseStudy.link}>
          View case study
          <Arrow />
        </a>
      </div>
    </li>
  )
}

export default CaseStudy;