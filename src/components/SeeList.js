import React, { Component } from 'react'
import axios from 'axios'
import TaskDelete from './TaskDelete';
import DoneTask from './DoneTask'
import { Link } from 'react-router-dom'


export default class SeeList extends Component {
  constructor(){
    super()
    this.state={
      tasks:[],
      isLoaded: false
    }
  }

  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/todo/`)
    .then(res=>
      this.setState({
      tasks:res.data,
      isLoaded:true
    })  
  )
  }
 
  render() {
    let myList = this.state.isLoaded?this.state.tasks.map(task=>{
      return(
        <li key={task.id}>{task.task_name}
        <div className='buttons'>
        <TaskDelete id={task.id}/>
          <DoneTask id={task.id}/>
          </div>
        </li>
    )}):<li>Loading......</li>
    return (
      <div className='SeeList'>
        <div className='listbutton'>
          <Link to='/'>
            <button className='myButtonBack' onClick={this.Add}>
              <i className="fas fa-chevron-left " style={{ fontSize: '2rem' }}></i>
            </button>
          </Link>
          <h1>My list of tasks</h1>
          <Link to='/done'>
            <button className='myButtonBack'>
              <i className="fas fa-chevron-right " style={{ fontSize: '2rem' }}></i>
            </button>
          </Link>
        </div>
        <ul className='listTasks'>
          {myList}
        </ul>
      </div>
    )
  }
}
