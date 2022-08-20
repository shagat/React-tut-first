import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <Todo text='Learn React'/>
        <Todo text='Master React'/>
        <Todo text='Explore the full React course'/>
      </div>
    </div>
  );
}

export default App;
