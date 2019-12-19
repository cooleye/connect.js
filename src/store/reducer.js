
const initialState = {
    counter:100,
    title:'nihao'
}

export default (state,action) =>{
    // console.log('reducer:',state,action)
    if(state == undefined || state == null){
        return initialState;
    }

    switch(action.type){
        case "INCREASE" : 
                var counter = state.counter;
                counter = counter + action.num;
                return {counter};
        case "DECREASE" : 
                var counter = state.counter;
                counter = counter - action.num;
                return {counter};

        case "UPDATE_TITLE" :
               return {...state,title: state.title + "@"}
        default: return state;
    }
}