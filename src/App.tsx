import * as React from 'react';
import "./App.scss";
import Input from "./components/Input";
import ShowList from "./components/ShowList";

type todoItemType = {
  discription: string,
  done: true | false 
}
type todolistType = todoItemType[];

function App() {
  const [todolist, setTodolist] = React.useState<todolistType | null>(null);

  return (
    <div className="App">
      <h2>AXing's TodoList</h2>
      <Input></Input>
      <ShowList></ShowList>
    </div>
  );
}

export default App;
