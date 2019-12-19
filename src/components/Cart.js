import React from 'react'
import {connect} from '../connect'

let Counter = ({counter,title,min,add,changeTitle}) =>{

    return (
        <div>
            <h1> {counter} </h1>
            <h2> { title }</h2>
            <button onClick={min}> - </button>
            <button onClick={add}> + </button>

            <button onClick={changeTitle}> update title </button>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        title:state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch({type:"INCREASE",num:1})
        },
        min: () => {
            dispatch({type:"DECREASE",num:1})
        },
        changeTitle() {
            dispatch({type:"UPDATE_TITLE"})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);




