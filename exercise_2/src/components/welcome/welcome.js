import { Footer } from "../footer/footer"
import { NavBar } from './navBar'
import { BaseButton } from "../styledButton/baseButton";
import { styledButton } from '../styledButton/styledButton';

export const Welcome = ({handleLogin, isLoggedIn}) => {
  const LoginButton = styledButton(BaseButton, 'success');
  return (
  <div>
      {
        isLoggedIn ? 
          // When logged in
          <NavBar /> :
          // When not logged in
          <p>Please log in</p>
      }
      <p></p>
      <LoginButton onClick={handleLogin} text={isLoggedIn ? 'Logout' : 'Login'} />
      <Footer/>
  </div>
  
  )
} 