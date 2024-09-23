import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import favoriteReducer from "./slices/favoritesSlice";
import { loggerMiddleWare } from "../services/loggerMiddleWare";


const store = configureStore({
    reducer: {
        todo: todoReducer,
        favorite: favoriteReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleWare],
});
export default store;