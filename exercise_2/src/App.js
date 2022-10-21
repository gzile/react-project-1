import { useState } from 'react';
import './App.css';
import { Welcome } from './components/welcome/welcome';
import { Home } from './components/home/home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { User } from './components/user/user';
import { SkillComponent } from './components/skill/skill';
import { BaseButton } from './components/styledButton/baseButton';
import { styledButton } from './components/styledButton/styledButton'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const handleGoBack = () => {
    navigate(-1);
  }
  
  const handleForward = () => {
    navigate(1);
  }

  const ForwardButton = styledButton(BaseButton, 'info');
  const BackButton = styledButton(BaseButton, 'react');

  return (
    <div className="App">
      <div>
         <BackButton 
            text='Go Back'
            onClick={handleGoBack}
          />
         <ForwardButton 
            onClick={handleForward}
            text='Go forward'
          />
      </div>
      <Routes>
        <Route 
          path='/' 
          element={<Welcome isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>}
        />
        <Route path='home' element={<Home/>} />
        <Route path='user/:username' element={<User/>} />
        <Route path='skills/:skill' element={<SkillComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
