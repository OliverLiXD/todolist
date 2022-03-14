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

  React.useEffect(() => {
    if(localStorage.getItem("todolist") !== null) {
      const data: todolistType = JSON.parse((localStorage.getItem("todolist") as string));
      setTodolist(() => {
        return data;
      })
    }
  },[])
  function storetodolistType(todolist: todolistType): void {
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }
  function addTodoItem(e: React.KeyboardEvent<HTMLInputElement>): void {
    if(e.code === "Enter"){
      const res = (e.target as HTMLInputElement).value;
      setTodolist((preState): todolistType => {
        if( preState !== null) {
          const newTodolist: todolistType = [
            ...preState,
            {
              discription: res,
              done: false,
              id: Date.now() + ""
            }
          ]
          storetodolistType(newTodolist);
          return newTodolist;
        }
        const newTodolist: todolistType = [
          {
            discription: res,
            done: false,
            id: Date.now() + ""
          }
        ]
        storetodolistType(newTodolist);
        return newTodolist;
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
        const newTodolist: todolistType = [
          ...res,
          {
            discription: changed.discription,
            done: !changed.done,
            id: changed.id
          }
        ];
        storetodolistType(newTodolist);
        return newTodolist;
      }

      return null;
    })
  }

  function deleteTodoItem(id: string): void {
    setTodolist((preState) => {
      if(preState !== null) {
        const newTodolist: todolistType = preState.filter((item) => {
          return item.id !== id;
        })
        storetodolistType(newTodolist);
        return newTodolist;
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
