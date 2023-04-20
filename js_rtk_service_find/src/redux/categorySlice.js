import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: []
}

// Birinci export burası. `categorySlice` objesinin kendisini const olarak export ediyoruz.
export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        // TODO Reducer fonksiyonlarını burada oluştur
        setCategories: (state, action) => {
            console.log('>> setCategories() reducer called', action)
            // >> setCategories() reducer called {type: 'categorySlice/setCategories', payload: Array(23)}

            state.categories = action.payload
        }
    },
})

// İkinci export burası. Action'ları export ediyoruz.
export const { setCategories } = categorySlice.actions

export default categorySlice.reducer
