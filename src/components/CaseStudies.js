import useApiResponse from '../hooks/useApiResponse';
import CaseStudy from './CaseStudy';

const CaseStudies = ({ activeCategory }) => {
  const caseStudiesArr = useApiResponse('case-studies');

  const filterCaseStudies = () => {
    return caseStudiesArr.filter(caseStudy => caseStudy.categories[0].slug === activeCategory);
  }

  const renderCaseStudies = () => {
    if (activeCategory === 'all') {
      return caseStudiesArr.map(caseStudy => {
        return <CaseStudy caseStudy={caseStudy} key={caseStudy.id}/>
      });
    } else {
      const filteredCaseStudiesArr = filterCaseStudies();
      return filteredCaseStudiesArr.map(caseStudy => {
        return <CaseStudy caseStudy={caseStudy} key={caseStudy.id}/>
      });
    }
  }

  return (
    <main>
      <ul id='case-studies-container'>
        {
          renderCaseStudies().length 
          ? renderCaseStudies() 
          : <li>No items</li> 
        }
      </ul>
    </main>
  )

}

export default CaseStudies;