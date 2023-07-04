import React, { useContext } from 'react';
import Colision from "./components/Colision";
import DarkMode from "./components/DarkMode";
import Form from "./components/Form";
import GeoLocation from "./components/GeoLocation";
import Header from "./components/Header";
import LimitDate from "./components/LimitDate";
import NetStatus from "./components/NetworkStatus";
import ResponsiveDesign from "./components/ResponsiveDesign";
import ResponsiveSlider from "./components/ResponsiveSlider";
import ResponsiveTester from "./components/ResponsiveTester";
import ScrollBtn from './components/ScrollBtn';
import SearchFilter from "./components/SearchFilter";
import Uploader from "./components/Uploader";
import VideoIntersecting from "./components/VideoIntersecting";
import VoiceNarrator from "./components/VoiceNarrator";
import Watch from "./components/Watch";
import WebCam from "./components/WebCam";
import MenuBtn from './components/MenuBtn';
import Panel from './components/Panel';
import { MenuContext } from './context/menuContext';


function App() {

  const {refSections} = useContext(MenuContext);

  return (
    <div className="main-div" ref={refSections}>
      <Header/>
      <MenuBtn/>
      <Panel/>
      <main className="main">
      <Watch/>
      <br/>
      <hr/>
      <br/>
      <Colision/>
      <br/>
      <hr/>
      <br/>
      <LimitDate/>
      <br/>
      <hr/>
      <br/>
      <ResponsiveDesign/>
      <br/>
      <hr/>
      <br/>
      <ResponsiveTester/>
      <br/>
      <hr/>
      <br/>
      <NetStatus/>
      <br/>
      <hr/>
      <br/>
      <WebCam/>
      <br/>
      <hr/>
      <br/>
      <GeoLocation/>
      <br/>
      <hr/>
      <br/>
      <SearchFilter/>
      <br/>
      <hr/>
      <br/>
      <ResponsiveSlider/>
      <br/>
      <hr/>
      <br/>
      <VideoIntersecting/>
      <br/>
      <hr/>
      <br/>
      <Form/>
      <br/>
      <hr/>
      <br/>
      <VoiceNarrator/>
      <br/>
      <hr/>
      <br/>
      <Uploader/>
      <br/><br/><br/><br/><br/><br/>
      </main>
    <DarkMode/>
    <ScrollBtn/>
    </div>
  );
}

export default App;
