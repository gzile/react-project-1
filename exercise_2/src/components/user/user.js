import avatar from '../../images/avatar.png';
import { useParams } from 'react-router-dom';

export const User = () => {
  const {username} = useParams();
  return (
    <div className='user-card'>
        <img src={avatar} alt='Avatar' width={120} />
        <h2>{username}</h2>
     </div>
  );
}