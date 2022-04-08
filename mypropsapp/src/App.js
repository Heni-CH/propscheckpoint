import React from 'react';
import pic from './profile/pic.jpg';
import logo from './profile/logo.jpg';
import Welcome from './profile/Welcome';

import './App.css';
import Profile from './profile/Profile';

function App(){
  const alertMyInput = name =>alert(name)
  const img={float:"left", borderRadius:"30%"}
  const logo1={position:"absolute", top:"0px", left:"0px",width:"70px", height:"70px"}
  return (
    <div className='App' style={{backgroundColor: '#222831',display:'flex', height:"100vh"}}>
  
        <Profile fullName="Heni chafai" bio="I am thirty years old from Tunisia" profession=" I'm currently learning web development at GoMycode."/>
        <img style={img} src={pic} alt="userpic"/>
        <img  style={logo1} src={logo} alt='logo'/>
        <Welcome alertMyInput = {alertMyInput}/>
        
    </div>
  );
}


export default App;
