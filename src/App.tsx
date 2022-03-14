import * as React from 'react';
import "./App.scss";
import MyInput from "./components/MyInput";
import ShowList from "./components/ShowList";

type todoItemType = {
  discription: string,
  done: true | false,
  id: string
}
type todolistType = todoItemType[];

function App() {

  const [todolist, setTodolist] = React.useState<todolistType | null>(null);

  function addTodoItem(e: React.KeyboardEvent<HTMLInputElement>): void {
    if(e.code === "Enter"){
      const res = (e.target as HTMLInputElement).value;
      setTodolist((preState): todolistType => {
        if( preState !== null) {
          return [
            ...preState,
            {
              discription: res,
              done: false,
              id: Date.now() + ""
            }
          ]
        }
        return [
          {
            discription: res,
            done: false,
            id: Date.now() + ""
          }
        ]
      })
    }
  }

  function changeTodoItem(id: string): void {
    console.log("changeTodoItem called, id = " + id);
    setTodolist((preState) => {
      let changed: todoItemType= {
        discription: "none",
        done: false,
        id: Date.now() + ""
      };
      if(preState !== null) {
        const res = preState.filter((item) => {
          if(item.id === id) {
            changed = item;
            return false
          }
          return true
        })
        changed.done = !changed.done;
        console.log(changed);
        return [
          ...res,
          {
            discription: changed.discription,
            done: !changed.done,
            id: changed.id
          }
        ] as todolistType;
      }

      return null;
    })
  }

  function deleteTodoItem(id: string): void {
    setTodolist((preState) => {
      if(preState !== null) {
        const res = preState.filter((item) => {
          return item.id !== id;
        })
  
        return res;
      }
      return null;
    })
  }

  return (
    <div className="App">
      <h2>AXing's TodoList</h2>
      <MyInput addTodoItem={ addTodoItem }></MyInput>
      <ShowList todolist={ todolist ? todolist : null } changeTodoItem={ changeTodoItem } deleteTodoItem={ deleteTodoItem }></ShowList>
    </div>
  );
}

export default App;
