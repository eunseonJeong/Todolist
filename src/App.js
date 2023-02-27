import React, { useState } from 'react'
import './App.css'

const App = () => {
  //자바스크립트 문법
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트', text: '강의듣기', isdone: false },
    { id: 2, title: '자바스크립트', text: '할 수 있다', isdone: true },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  //제목 버튼
  const titleHandler = event => {
    setTitle(event.target.value);
  }

  //내용 버튼
  const textHandler = event => {
    setText(event.target.value);
  }

  //추가 버튼 클릭
  const clickAddButton = () => {
    const newArr = {
      id: todo.length + 1,
      title,
      text,
      isdone: false,
    }
    setTodo([...todo, newArr]);
    setTitle('');
    setText('');
  };

  //삭제 버튼 클릭
  const clickRemoveButton = (id) => {
    const removeArr = todo.filter(user => user.id !== id);
    setTodo(removeArr)
  };

  const clickCheckButton = (id) => {
    const checkArr = todo.map(item => {
      if (item.id === id) {
        if (item.isdone === false) {
          item.isdone = true;
        } else {
          item.isdone = false;
        }
      }
      return item;
    });
    setTodo([...checkArr]);
  };

  // const clickCheckButton = (id) => {
  //   const checkArr = todo.map((item) => {
  //     if (item.id === id) { 
  //       item.isdone = !item.isdone
  //       return ([ ...todo, item]);
  //     } else {
  //       return ([...todo]);
  //     }
  //   })
  //   setTodo([...checkArr]);
  // };

  return (
    <>
      <div className='app-reactButton'>
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className='app-reactButton'>
        <div>
          제목 &nbsp; <input value={title} onChange={titleHandler} /> &nbsp;&nbsp;&nbsp;
          내용 &nbsp; <input value={text} onChange={textHandler} />
        </div>
        <div>
          <button class="button btnPush btnPurple" onClick={clickAddButton}>추가하기</button>
        </div>
      </div>

      <h2 className='app-reactButton'>Working..</h2>
      <div className='app-title'>
        {
          todo.map(item => {
            if (item.isdone === false) {
              return (
                <div className='app-test' key={item.id}>
                  {item.title} <br /> {item.text}
                  <div className='app-button'>
                    <button class="button btnPush btnPurple" onClick={() => clickRemoveButton(item.id)}> 삭제</button>
                    <button class="button btnPush btnPurple" onClick={() => clickCheckButton(item.id)}> 완료</button>
                  </div>
                </div>
              )
            }
          })
        };
      </div>

      <h2 className='app-reactButton'>Done!</h2>
      <div className='app-title'>
        {/* 버튼을 누르면 여기로 오게끔 > 완료 true면 여기로 오게끔 !!!조건: isdone === true ? Done으로 : 그대로  */}
        {
          todo.map(item => {
            if (item.isdone === true) {
              return (
                <div className='app-test' key={item.id}>
                  {item.title} <br /> {item.text}
                  <div className='app-button'>
                    <button class="button btnPush btnPurple" onClick={() => clickRemoveButton(item.id)}> 삭제</button>
                    <button class="button btnPush btnPurple" onClick={() => clickCheckButton(item.id)}> 취소</button>
                  </div>
                </div>
              )
            }
          })
        };
      </div>
    </>
  )
}

export default App

// //제목 내용을 입력하면 기본 배열에 추가가 되기! (스프레드 문법)