import React,{useState,useEffect} from 'react'

let Container = ({store}) => {

    let [counter,setCounter] = useState(0);
    
    useEffect(() =>{
        store.subscribe(() => {
            setCounter(store.getState().counter)
        });
    })

    let add = () =>{
        store.dispatch({
            type:"INCREASE",
            num:1
        })
    }
    let min = () =>{
        store.dispatch({
            type:"DECREASE",
            num:1
        })
    }
    return  <Counter  counter={counter}  min={min}  add={add}/>
}


export default ({Consumer}) => (
    <Consumer>
        { (store) => <Container store={store}/>}
    </Consumer>)