import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/counter';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{});
    }
    componentWillUnmount(){
        this.unsubscribe();//取消订阅
    }
    render(){
        //console.log('counter render')
        return(
            <div style={{ border: '1px solid red' }}>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment.bind(this,1)}> + </button>
                <button onClick={this.props.decrement.bind(this,1)}> - </button>
                <button onClick={this.props.thunkIncrement.bind(this,1)}> 过一秒 + 1 </button>
                <button onClick={this.props.promiseIncrement.bind(this,1)}> promise过一秒 + 1 </button>
                <button onClick={this.props.payloadIncrement.bind(this,1)}> payload过一秒 + 1 </button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state.counter
}

const mapDispatchToProps = (dispath) =>{
    console.log(dispath)
    return dispath
}

export default connect(
    mapStateToProps,
    actions
)(Counter)