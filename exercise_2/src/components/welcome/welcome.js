import { Footer } from "../footer/footer"

export const Welcome = ({handleLogin, isLoggedIn}) => {

  return (
  <div>
      {isLoggedIn ? 'Welcome to React' : <p>Please log in</p>}
      <p></p>
      <button onClick={handleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <Footer/>
  </div>
  
  )
} 