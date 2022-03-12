import * as React from "react";
import "./ShowList.scss"

const ShowList = () => {
  return (
    <div className="showlist">
      <div className="unfinish">
        <div className="listtitle">To Do</div>
        <ul>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
        </ul>
      </div>
      <div className="finished">
      <div className="listtitle">Completed</div>
        <ul>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
            <i className="iconfont clean" >&#xe8d1;</i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShowList;