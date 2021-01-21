import React, { Fragment, useContext } from 'react';
import './Header.css';
import { TodoContext } from './TodoStore';

const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <Fragment>
      <h1>HELLO TODO 애플리케이션</h1>
      <div className='countInfo'>
        헤야할 일 {todos.filter((v) => v.status === 'todo').length}개가
        있습니다.
      </div>
    </Fragment>
  );
};

export default Header;
