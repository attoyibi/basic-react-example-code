import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: "muchson"
        }
        console.log("constructor")
        console.log(this.props)
        console.log(this.state.data)
    }
    static getDrivedStateProps(){
        console.log("getDrivedStateProps")
    }
  render() {
    console.log("render")
    console.info(this.state.data)
    return (
      <div>{this.state.data}</div>
    )
  }
  componentDidMount(){
      console.log("componentDidMount")
    this.setState({data:"muchson dari did mount"})
  }
  componentDidUpdate(){
    console.log("componentDidMount")
  this.setState({data:"muchson dari did mount"})
}
}
