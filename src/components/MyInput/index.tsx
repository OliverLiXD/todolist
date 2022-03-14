import * as React from "react";
import "./Input.scss"
type MyInputProp = {
  addTodoItem: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
type MyInputState = {

}
const Input = ({ addTodoItem }: MyInputProp, state: MyInputState) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  function cleanInput(e: React.MouseEvent<HTMLElement>): void {
    (inputRef.current as HTMLInputElement).value = ""
  }

  return (
    <div className="input">
      <input type="text" onKeyUp={addTodoItem} ref={inputRef}/>
      <i className="iconfont clean" onClick={ cleanInput }>&#xe8d1;</i>
    </div>
  )
}

export default Input;