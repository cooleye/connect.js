import React from 'react';
import { connect } from 'react-redux';

let Counter =  (props) => {
    return (
        <div>
            this is counter {props.counter}

            <button  onClick={props.increase}> increase </button>
            <button  onClick={props.decrease}> decrease </button>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch({
                type:"INCREASE",
                num:1
            })
        },
        decrease: () => {
            dispatch({
                type:"DECREASE",
                num:1
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

