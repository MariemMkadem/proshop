import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ProductListReducer, ProductDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,

})

const initialState = {}

const middelware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
)

export default store
