import { combineReducers, createStore } from "redux";
import categoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
    categoryState: categoryReducer
})

/**
 * Default olarak export edilen dosya değişkeni export etmez, değeri export eder. Bu sebepten dolayı
 * import eden dosyada bu export edilen değeri istediğimiz isimle alabiliriz. Bu da şu anlama gelir:
 * default export yaparken illa bir isim belirtme zorunluluğumuz yok. Doğrudan değeri default
 * export edebiliriz.
 * 
 */

//const store = createStore(rootReducer)
//export default store

export default createStore(rootReducer)
