
const initialState = {
    counter:0,
    title:'nihao'
}

export default (state,action) =>{

    if(state == null){
        return initialState;
    }

    switch(action.type){
        case "INCREASE" : 
                var counter = state.counter;
                counter = counter + action.num;
                return {...state,counter};
        case "DECREASE" : 
                var counter = state.counter;
                counter = counter - action.num;
                return {...state,counter};

        case "UPDATE_TITLE" :
               return {...state,title: state.title + "@"}

        default: return state;
    }
}