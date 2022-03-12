import * as React from "react";
import "./ShowList.scss"

const ShowList = () => {
  return (
    <div className="showlist">
      <div className="unfinish">
        <ul>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
        </ul>
      </div>
      <div className="finished">
        <ul>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
          <li className="todoitem">
            <input type="checkbox" className="checkbox"/>
            <span className="discription">discription</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShowList;