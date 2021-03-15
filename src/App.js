import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const initialTodos = [
    {id:0,text:"Learn React",day:"15-03-2021", completed:false},
    {id:1,text:"Learn Golang",day:"16-03-2021", completed:false},
    {id:2,text:"Learn Json Parsing",day:"17-03-2021", completed:true},
    {id:3,text:"Learn Next JS",day:"18-03-2021", completed:false},
    {id:4,text:"Learn JWT",day:"19-03-2021", completed:false},
    {id:5,text:"Learn DB Connection",day:"20-03-2021", completed:false},
  ];
  const [todos,setTodo] = useState(initialTodos)
  return (
    <div className="App">
      <Navbar/>
      <Home todos={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
