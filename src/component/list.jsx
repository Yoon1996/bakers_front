import React, { useRef, useState } from "react";

// NOTE : useRef
/**
 * useRef 는 클래스에서 createRef로 사용하던 기능을 함수형 컴포넌트에서 사용하기 위해 나왔습니다.
 * 사용법은 기존에 createRef와 동일합니다.
 */

function Ex2RefFunction() {
  const inputRef = useRef();
  const intervalRef = useRef();
  const [count, setCount] = useState(0);

  const [todoList, setTodoList] = useState([{ title: "good", isDone: false }]);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCount(count + 1);
      console.log("good");
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  const todoItemChange = (value, index) => {
    todoList[index].title = value;
    setTodoList([...todoList]);
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputFocus()}>Input Focus Button</button>
      </div>
      <div className="interval-box">
        <button onClick={startInterval}>start</button>
        <button onClick={stopInterval}>stop</button>
      </div>
      {todoList.map((todo, index) => (
        <div key={index} className="input-row">
          <input
            type="text"
            value={todo.title}
            onChange={(e) => todoItemChange(e.target.value, index)}
          />
        </div>
      ))}

      <div className="button-wrapper">
        <button
          onClick={() =>
            setTodoList([...todoList, { title: "", isDone: false }])
          }
        >
          add
        </button>
        <button onClick={() => console.log(todoList)}>show todo</button>
      </div>
    </>
  );
}

export default Ex2RefFunction;
