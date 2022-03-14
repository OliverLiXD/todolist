import * as React from "react";
import "./ShowList.scss"

type todoItemType = {
  discription: string,
  done: true | false,
  id: string
}
type todolistType = todoItemType[];

type ShowListProps = {
  todolist: todolistType | null,
  changeTodoItem: (id: string) => void,
  deleteTodoItem: (id: string) => void
}

const ShowList = ({ todolist, changeTodoItem, deleteTodoItem }: ShowListProps) => {
  return (
    <div className="showlist">
      <div className="unfinish">
        <div className="listtitle">To Do</div>
        <ul>
          { todolist ? 
            todolist.filter((item) => {return !item.done}).length > 0 ?
            todolist.filter((item) => {return !item.done}).map((item) => {
              return (
                <li className="todoitem" key={item.id}>
                  <input type="checkbox" className="checkbox" onChange={() => {changeTodoItem(item.id)}} checked={item.done}/>
                  <span className="discription">{item.discription}</span>
                  <i className="iconfont clean" onClick={() => {deleteTodoItem(item.id)}}>&#xe8d1;</i>
                </li>
              )
            }) : (
              <li className="todoitem">
                {/* <input type="checkbox" className="checkbox" onClick={changeTodoItem}/> */}
                <span className="discription">have no comtent</span>
                {/* <i className="iconfont clean" onClick={deleteTodoItem}>&#xe8d1;</i> */}
              </li>
            )
              :
            <li className="todoitem">
              {/* <input type="checkbox" className="checkbox" onClick={changeTodoItem}/> */}
              <span className="discription">have no comtent</span>
              {/* <i className="iconfont clean" onClick={deleteTodoItem}>&#xe8d1;</i> */}
            </li>
          }
        </ul>
      </div>
      <div className="finished">
      <div className="listtitle">Completed</div>
        <ul>
          { todolist ? 
            todolist.filter((item) => {return item.done}).length > 0 ?
            todolist.filter((item) => {return item.done}).map((item) => {
              return (
                <li className="todoitem" key={item.id}>
                  <input type="checkbox" className="checkbox" checked={item.done} onChange={() => {changeTodoItem(item.id)}}/>
                  <span className="discription">{item.discription}</span>
                  <i className="iconfont clean" onClick={() => {deleteTodoItem(item.id)}}>&#xe8d1;</i>
                </li>
              )
            }) : (
              <li className="todoitem">
                {/* <input type="checkbox" className="checkbox" onClick={changeTodoItem}/> */}
                <span className="discription">have no comtent</span>
                {/* <i className="iconfont clean" onClick={deleteTodoItem}>&#xe8d1;</i> */}
              </li>
            )
              :
            <li className="todoitem">
              {/* <input type="checkbox" className="checkbox" onClick={changeTodoItem}/> */}
              <span className="discription">have no comtent</span>
              {/* <i className="iconfont clean" onClick={deleteTodoItem}>&#xe8d1;</i> */}
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default ShowList;