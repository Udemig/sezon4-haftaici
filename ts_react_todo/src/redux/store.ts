import { configureStore } from "@reduxjs/toolkit";
import jholderUserReducer from "./jholderUserSlice";
import jholderAlbumReducer from "./jholderAlbumSlice";

const store = configureStore({
  reducer: {
    jholderUserState: jholderUserReducer,
    jholderAlbumState: jholderAlbumReducer,
  },
});

/**
 * Store objesi içerisinde bulunan state objesinin type'ını otomatik
 * olarak oluşturulması gerekiyor. Çünkü useSelector hook'u içerisinde
 * kullanacağımız `state` parametresinin türünü belirtmek gerektiği
 * için.
 */
export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;
