const Todo = ({todo,onTodoCompleted}) => {
    
    
    return ( 
        <div className="container mx-auto bg-green-400 mt-2 mb-2 p-4 text-white flex items-center max-w-md ">
            <form>
                <input type="checkbox" defaultChecked={todo.completed} onClick={()=>{onTodoCompleted(todo.id)}}/>
            </form>
            <div className="ml-4">
            <h3 className={"text-xl " +
             (todo.completed? ' line-through font-thin italic' : 'font-semibold') }>{todo.text}</h3>
           
            <p className="text-sm">{todo.day}</p>
            </div>
            <form className="ml-auto">
               <button className="bg-red-500 p-1 text-sm rounded-sm font-light">Delete</button>
            </form>
        </div>
     );
}
 
export default Todo;