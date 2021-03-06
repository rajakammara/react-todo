import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // const initialTodos = [
  //   {id:0,text:"Learn React",day:"15-03-2021", completed:false},
  //   {id:1,text:"Learn Golang",day:"16-03-2021", completed:false},
  //   {id:2,text:"Learn Json Parsing",day:"17-03-2021", completed:true},
  //   {id:3,text:"Learn Next JS",day:"18-03-2021", completed:false},
  //   {id:4,text:"Learn JWT",day:"19-03-2021", completed:false},
  //   {id:5,text:"Learn DB Connection",day:"20-03-2021", completed:false},
  // ];
  const [todos, setTodo] = useState([
    { id: 0, text: "Learn React", day: "15-03-2021", completed: false },
    { id: 1, text: "Learn Golang", day: "16-03-2021", completed: false },
    { id: 2, text: "Learn Json Parsing", day: "17-03-2021", completed: true },
    { id: 3, text: "Learn Next JS", day: "18-03-2021", completed: false },
    { id: 4, text: "Learn JWT", day: "19-03-2021", completed: false },
    { id: 5, text: "Learn DB Connection", day: "20-03-2021", completed: false },
  ]);

  const [showaddtodo, setShowaddtodo] = useState(false);
  //Mark Completed
  const handleCompleted = (id) => {
    console.log(id);
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

 
  //Add Todo
  const handleAddTodo = (todo) => {
    console.log("Inside Add Todo ", todo);
    setTodo((todos) => [...todos, todo]);
    console.log(todos);
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    setTodo(
      todos.filter(todo => todo.id!== id)
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Home
        todos={todos}
        onTodoCompleted={handleCompleted}
        onAddTodo={handleAddTodo}
        onDelete= {handleDeleteTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
