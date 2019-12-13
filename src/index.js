import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// div  jsx  
// React.createElement('div',null,'hello world');
let box = <div>hello world </div>


// 函数式组件
let Box = function({title}){
    return <h1> 你好,长沙  {title}</h1>
}
let Profile = ({day}) => <div> 明天{day} </div>


// 类组件
class Person extends React.Component{
    render(){
        return  <div> {this.props.name} </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

