
export const UserCard = ({name, lastName, avatar}) => {

  return (
    <div className='user-card'>
        <img src={avatar} alt='Avatar' width={120} />
        <h2>{`${name} ${lastName}`}</h2>
      </div>
  );
}