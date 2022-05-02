import useApiResponse from '../hooks/useApiResponse';
import CaseStudy from './CaseStudy';
import EmptyCategory from './EmptyCategory';
import '../styles/CaseStudies.scss';

const CaseStudies = ({ activeCategory }) => {
  const caseStudiesArr = useApiResponse('case-studies');

  const filterCaseStudies = () => {
    return caseStudiesArr.filter(caseStudy => caseStudy.categories[0].slug === activeCategory);
  }

  const renderCaseStudies = () => {
    // if the selected category is "All", return all the case studies
    if (activeCategory === 'all') {
      return caseStudiesArr.map(caseStudy => {
        return <CaseStudy caseStudy={caseStudy} key={caseStudy.id}/>
      });
    } else {
      // otherwise, filter the case studies array
      const filteredCaseStudiesArr = filterCaseStudies();
      if (filteredCaseStudiesArr.length) {
        return filteredCaseStudiesArr.map(caseStudy => {
          return <CaseStudy caseStudy={caseStudy} key={caseStudy.id}/>
        });
      } else {
        return <EmptyCategory text="There are currently no case studies in this category."/>
      }
    }
  }

  return (
    <main>
      <ul id='case-studies-container'>
        {renderCaseStudies()}
      </ul>
    </main>
  )
}

export default CaseStudies;