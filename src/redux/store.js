import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware} from "redux";
import quoteReducer from "./reducers/quoteReducer";
import thunk from 'redux-thunk'

const store = createStore(
  quoteReducer,
  applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
