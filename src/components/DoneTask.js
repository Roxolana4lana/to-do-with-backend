import React, { Component } from 'react'
import axios from 'axios'

export default class DoneTask extends Component {
    constructor() {
        super()
        this.state={
            is_done:false,
            task_name:''
        }
    }
    Edit = async () => {
        let id = this.props.id
       await axios.put(`http://127.0.0.1:8000/todo/` + id + `/`, {is_done:true, id:id})
       .then(res=>(console.log(res.data)))
    }

  render() {
    return (
      <div>
            <button className='theButton' onClick={this.Edit}>
                <i className="fas fa-check " style={{ fontSize: '1rem' }}></i>
            </button>
      </div>
    )
  }
}
