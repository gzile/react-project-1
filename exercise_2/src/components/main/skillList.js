export const SkillList = ({ skills }) => {
  return (
    <div>
    { 
      skills ?
      <div className='user-skills'>
        <ul>
          {
            skills.map((item, index) => {
              return (<li key={`${item} ${index}`}>{item}</li>);
            })
          }
        </ul>
      </div>
      : <></>
    }
    </div>
  );
}