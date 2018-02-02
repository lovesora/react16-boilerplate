import {
  combineReducers
} from 'redux';
import PostReducer from './post.reducer';
import HomeReducer from './home.reducer';

export default combineReducers({
  home: HomeReducer,
  post: PostReducer,
});
