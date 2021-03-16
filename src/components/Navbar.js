const Navbar = () => {
  return (
    <header className="flex justify-evenly bg-red-400 p-6 text-white items-center max-w-md mx-auto">
      <h3 className="font-semibold text-xl">Todo App</h3>
      <ul className="list-none flex flex-row justify-around">        
        <li className="ml-2 mr-2 cursor-pointer">About</li>
        <li className="ml-2 mr-2 cursor-pointer">Contact</li>
      </ul>
    </header>
  );
};

export default Navbar;
