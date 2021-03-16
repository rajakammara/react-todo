import Todo from "./Todo";
import { useState } from "react";
const Home = ({ todos, onTodoCompleted, onAddTodo, onDelete }) => {
  const [text, setText] = useState("");
  const [dayval, setDay] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showAdd,setShowAdd] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter Todo Text");
      return;
    }
    let textvalue = text;
    let completedvalue = completed;
    let day = dayval;
    let id = Math.floor(Math.random() * 10000);

    let todovalue = {
      id: id,
      day: day,
      text: textvalue,
      completed: completedvalue,
    };
    onAddTodo(todovalue);
  };
  
  return (
    
    <div className="container mx-auto max-w-md">
      
      <button className="mt-2 mb-2 p-2 bg-blue-500 text-white float-right" onClick={()=>setShowAdd(!showAdd)}>
        {showAdd? 'Close' : 'Add Todo'}
      </button> 
      <br />
     
     
      {showAdd &&
      <form className="mt-8 border p-6" onSubmit={onSubmit}>
        <div className="flex justify-evenly items-center">
          <label className="font-semibold w-1/3">Todo: </label>
          <input
            type="text"
            className="p-1 border ml-1 w-2/3"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex justify-evenly items-center mt-2">
          <label className="font-semibold w-1/3">Day & Time: </label>
          <input
            type="text"
            placeholder="Day and Time"
            className="p-1 border ml-1 w-2/3"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="flex items-center mt-2">
          <label className="font-semibold w-1/3">Completed: </label>
          <input
            type="checkbox"
            className="p-1 border ml-0 w-2/3"
            defaultChecked={completed}
            onClick={(e) => setCompleted(!completed)}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-600 text-white p-2 block w-full rounded-sm mt-2">
            Save
          </button>
        </div>
      </form>
     } 

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onTodoCompleted={onTodoCompleted} onDelete={onDelete}/>
      ))}
    </div>  
  

  );
};

export default Home;
