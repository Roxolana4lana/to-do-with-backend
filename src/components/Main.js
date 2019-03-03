import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom'


export default class Main extends Component {
    constructor(){
        super()
        this.state={
         tasks:[]
        }
    }
    handleChange = e => {
       let tasks=[...this.state.tasks]
        tasks[e.target.dataset.id][e.target.className]= e.target.value
            this.setState({
                tasks
            })
        } 
    
    Add = e => {
        e.preventDefault()
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, { task_name: "" }]
        }))
    }
    handleSubmit= e =>{
        e.preventDefault()
        const action={
        tasks:this.state.tasks
    }
        axios.post(`http://127.0.0.1:8000/todo/`, action)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        this.setState({
            tasks:[]
        })
    }
    handleRemove = index =>{
        this.state.tasks.splice(index, 1)
        this.setState({tasks:this.state.tasks})
    }
    handleClear = e =>{
        this.setState({
            tasks:[]
        })
    }
    
  render() {
    return (
        <div className='Main'>
            <div className='mainButtons'>
                <h1>To do list</h1>
                <div className='but'>
                    <button className='myButton' onClick={this.Add}>
                    <i className="fas fa-plus " style={{ fontSize: '2rem' }}>
                    </i></button>

                    <button className='myButton' onClick={this.handleRemove}>
                    <i className="fas fa-minus " style={{ fontSize: '2rem' }}>
                    </i></button>

                    <button className='myButton' onClick={this.handleClear}>
                    <i className="fas fa-trash-alt " style={{ fontSize: '2rem' }}>
                    </i></button>

                    <button className='myButton' onClick={this.handleSubmit}>
                    <i className="fas fa-save" style={{ fontSize: '2rem' }}>
                    </i></button>

                    <Link to='/list'><button className='myButton'>
                    <i className="fas fa-list-ol" style={{ fontSize: '2rem' }}>
                    </i></button></Link>
                </div>
                {
                this.state.tasks.map((task, idx) => {
                    let tid = idx +1
                    return (
                        <div key={idx}>
                            <label className='myLabel'>task num {tid}</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                id={idx}
                                data-id={idx}
                                className="task_name" />
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
  }
}
