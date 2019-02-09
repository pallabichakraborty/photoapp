import posts from '../data/posts';
import {combineReducers} from 'redux';

const commentReducer = (state ={}, action ) => {
    switch(action.type)
    {
        case 'ADD_COMMENT': 
                           if(!state[action.postId])
                           {
                            return {...state,[action.postId]:[action.comments]}
                           }
                           else
                           {
                            return {...state,[action.postId]:[...state[action.postId],action.comments]}
                           }
        case 'LOAD_COMMENTS': return action.comments

                           
        default: return state
    }
}
const postReducer = (state = posts , action) => {
    switch(action.type)
    {
        case 'REMOVE_POST':return [...state.slice(0,action.index),...state.slice(action.index+1)]
        case 'ADD_POST': return [...state,action.photo]
        case 'LOAD_POSTS': return action.posts
        default:return state;
    }    
}

const rootReducers = combineReducers({postReducer,commentReducer});

export default rootReducers;