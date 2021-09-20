import React from 'react'

import {connect} from 'react-redux'
import {increaseCounter, decreaseCounter} from '../../redux/Counter/counter.actions'

const Counter = ({count, inc, dec})=>{
    return (
        <div>
            <div style={{'font-size':'20px', 'text-align':'center', 'margin-top':'20px', 'color':'#ffffff'}}>Count:{count}</div>
            <div style={{'text-align':'center', 'margin-top':'20px'}}>
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {count:state.counter.count}
}

const mapDispatchToProps = (dispatch)=>{
    return {inc:()=>{dispatch(increaseCounter())},
            dec:()=>{dispatch(decreaseCounter())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)