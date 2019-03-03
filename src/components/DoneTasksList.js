import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class DoneTasksList extends Component {
    constructor() {
        super()
        this.state = {
            done_tasks: [],
            isLoaded:false
        }
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/todo/done`)
            .then(res =>
                this.setState({
                    tasks: res.data,
                    isLoaded: true
                })
            )
    }
  render() {
      let myList = this.state.isLoaded ? this.state.tasks.map(task => {
          return (
              <li key={task.id}>{task.task_name}</li>)
      }) : <li>Loading......</li>
    return (
      <div className='DoneTasksList'>
            <div className='buttondone'>
                <Link to='/'>
                    <button className='myButtonBack' onClick={this.Add}>
                        <i className="fas fa-angle-double-left" style={{ fontSize: '2rem' }}></i>
                    </button>
                </Link>
                <h1>Done Tasks</h1>
                <Link to='/list'>
                    <button className='myButtonBack' onClick={this.Add}>
                        <i className="fas fa-chevron-left " style={{ fontSize: '2rem' }}></i>
                    </button>
                </Link>
      </div>
        <ul>
            {myList}
         </ul>
     </div>
    )
  }
}
