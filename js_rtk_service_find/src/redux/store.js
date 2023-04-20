import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice"
import authSlice from "./authSlice";

export const store = configureStore({
    reducer: {
        authState: authSlice,
        categoryState: categoryReducer
    }
})

// Ayrıca `store` objesini default olarak export edebiliriz.
// Bu şekilde yaptığımızda import edilen yerde default olarak import
// edilmesi gerektiğini unutmayın.
//export default store
