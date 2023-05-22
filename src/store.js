import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "./features/Todos/todos-slice";
import {filterReducer} from "./features/Filters/filters-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
}                     from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  storage
};
const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ]
    }
  })
});

export const persistor = persistStore(store);