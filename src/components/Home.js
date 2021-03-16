import Todo from "./Todo";
const Home = ({ todos,onTodoCompleted }) => {
    
  return (
    <div className="container mx-auto max-w-md">
      <button className="mt-2 mb-2 p-2 bg-blue-500 text-white float-right">
        Add Todo
      </button>
      <br />
      <form className="mt-8 border p-6">
        <div className="flex justify-between items-center">
          <label className="font-semibold">Todo: </label>
          <input type="text" className="w-full p-1 border ml-1" />
        </div>
        <div className="flex justify-center">
            <button className="bg-yellow-600 text-white p-2 block w-full rounded-sm mt-2">Save</button>
        </div>
      </form>
       
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onTodoCompleted={onTodoCompleted}/>
      ))}
    </div>
  );
};

export default Home;
