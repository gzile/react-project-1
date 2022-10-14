import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainComponent } from './components/main/main';
import dataFromHeader from './data/headerData.json';
import mainData from './data/mainData.json';

function App() {
  const heading = dataFromHeader.headerData.heading1;
  const author = dataFromHeader.headerData.author;
  const thisYear = new Date().getFullYear();

  return (
    <div className="App">
      <Header heading1={heading} author={author}/>
      <MainComponent user={mainData.userData} />
      <Footer date={thisYear} />
    </div>
  );
}

export default App;
