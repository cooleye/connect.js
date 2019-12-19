import React,{createContext} from 'react';
const {Provider,Consumer} = createContext();
export const Container = ({store,children}) => {
    return (
        <div>
            <Provider value={store}>
                {children}
            </Provider>
        </div>
    )
}
class Inner extends React.Component{  
    constructor(props){
        super(props)
        this.state = {}
        let {mapStateToProps,store} = this.props;
        //从mapStateToProps获得用户需要的状态
        let mapState = mapStateToProps(store.getState());
        for(let key in mapState){
            this.state[key] = mapState[key]
        }
    }
    componentDidMount(){
        let {store} = this.props
        //注册监听，这样当state发生改变时，改变Inner的内部状态，把这个新状态在render中传给了展示组件Comp，Comp就可以实时获取最新状态了
        store.subscribe(()=>{
            let storeState = store.getState();
            for(let key  in this.state){
                this.setState({
                    [key]: storeState[key]
                })
            }
        })     
    }
    render() {
        let {store,Comp,mapDispatchToProps} = this.props;
        let actions = mapDispatchToProps(store.dispatch)
        //把状态和方法传入到展示组件中
        return (<Comp {...actions} {...this.state} />)
    }
}
//connnect是一个高阶组价，返回一个函数，接受展示组件为参数，使用<Consumer/>包装，传入 store
export const connect = (mapStateToProps,mapDispatchToProps) =>{
    return (Comp) => {
        return () => (
            <Consumer>
            { (store) =>( <Inner  Comp={Comp}  store={store} mapStateToProps={mapStateToProps} mapDispatchToProps={mapDispatchToProps}></Inner> ) }
        </Consumer>)
    }
}