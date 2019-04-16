import { combineReducers } from 'redux';
import slideShowReducer from './reducerSlideShow';

const allReducers = combineReducers({
    currentImageID: slideShowReducer,
});

export default allReducers;