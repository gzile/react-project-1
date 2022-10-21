import cssLogo from '../../images/css_logo.png';
import jsLogo from '../../images/js_logo.png';
import htmlLogo from '../../images/html_logo.png';
import { useParams } from 'react-router-dom';
import mainData from '../../data/mainData.json'

export const SkillComponent = () => {
const { skill } = useParams();
const skillList = mainData.userData.skills;

const setImageSrc = () => {
  
  switch (skill) {
    case skillList[0]:
      return htmlLogo;

    case skillList[1]:
      return jsLogo;

    case skillList[2]:
      return cssLogo;

    default:
      return htmlLogo;
  }
}
  return (
    <div className='skill-card'>
      <img src={setImageSrc()} width='120px' height='180px' alt={skill} />
      <h2>{skill}</h2>
    </div>
  )
}