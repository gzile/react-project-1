import { useState } from 'react';
import './App.css';
import { Welcome } from './components/welcome/welcome';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import { User } from './components/user/user';
import { SkillComponent } from './components/skill/skill';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
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
