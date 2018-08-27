import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd'

class TodoList extends React.Component {
	render() {
		return (
      <div>
        <Input placeholder='todolist'></Input>
      </div>
    )
	}
}

export default TodoList;
