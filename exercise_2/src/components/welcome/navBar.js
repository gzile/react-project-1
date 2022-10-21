import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setFirstName(event.target.value);
    const key = event.key;
    console.log(key);
  }

  const onKeyUpHandler = (event) => {
    const key = event.key;
    if(key === 'Enter'){
      navigate('/user/'+ firstName);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <nav style={{ width: '100%' }}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link
              to={'/home'}
              style={{ textDecoration: 'none' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${firstName}`}
              style={{ textDecoration: 'none' }}
            >
              User {firstName}
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ width: '100%', marginTop: '15px' }}>
        <label htmlFor='firstName'>First name </label>
        <input
          name="firstName" type='text'
          value={firstName} 
          onChange={(event) => onChangeHandler(event)}
          onKeyUp={(event) => onKeyUpHandler(event)}
        />
      </div>
    </div>
  )
}