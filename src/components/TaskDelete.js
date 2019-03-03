import React, { Component } from 'react'
import axios from 'axios'


export default class TaskDelete extends Component {
    handleRemove = e => {
        let id = this.props.id
        axios.delete(`http://127.0.0.1:8000/todo/` + id + `/`)
        .catch(err=>(console.log(err)))
        .then(window.location.reload())
    }

  render() {
    return (
            <button className='theButton' onClick={this.handleRemove}>
              <i className="fas fa-minus " style={{ fontSize: '1rem' }}></i>
            </button>
    )
  }
}
