import {Header} from '../header/header';
import { MainComponent } from '../main/main';
import {Footer} from '../footer/footer';
import dataFromHeader from '../../data/headerData.json';
import mainData from '../../data/mainData.json';

export const Home = () => {
  const homeData = {
    heading: dataFromHeader.headerData.heading1,
    author: dataFromHeader.headerData.author,
    user: mainData.userData,
  }
  return (
    <>
      <Header heading1={homeData.heading} author={homeData.author}/>
      <MainComponent user={homeData.user}/>
      <Footer/>
    </>
  )
}