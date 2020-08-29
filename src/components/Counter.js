import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props) 
        this.inc=this.inc.bind(this)
        this.dec=this.dec.bind(this)
        this.reset=this.reset.bind(this)
        this.state={
            count:0
        }
    }

    componentDidMount() {
        console.log('Mounted');
    }

    componentDidUpdate() {
        console.log('Updated')
    }
    inc() {
        this.setState((ps)=> {
            return {
                count: ps.count+1
            }
        })
        console.log(this.state)
    }
    dec() {
        this.setState((prevstate)=>{
            return {
                count: prevstate.count-1
            }
        })
        console.log(this.state)
    }
    reset() {
        this.setState(()=>{
            return{
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                Count : {this.state.count}
                <br/>
                <button onClick={this.inc}>Add</button>
                <button onClick={this.dec}>Minus</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
