import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  items: itemReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
});
