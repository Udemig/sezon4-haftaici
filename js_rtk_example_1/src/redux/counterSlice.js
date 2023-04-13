import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

// 1. Aşama: createSlice ile oluşturulan slice objesini değişkene aktar.
export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        // TODO Buraya birden fazla reducer fonksiyonu oluşturabiliriz.
        increase: (state, action) => {
            console.log('>> increase fonksiyonu çağırıldı', state, action)

            // Birinci dispatch'ten dönen action objesi:
            // {type: 'counterSlice/increase', payload: undefined}

            // İkinci dispatch'ten dönen action objesi:
            // {type: 'counterSlice/increase', payload: undefined}

            // Görüldüğü üzere iki obje de aynı. Bunun sebebi app.jsx dosyasından iki kez
            // dispatch yapılmasından kaynaklanıyor. İkisinde de farklı parametreler olmasına rağmen
            // aynı action objeleri gönderildiğine dikkat edin.

            state.counter += 1
        },
        decrease: (state, action) => {
            console.log('>> decrease fonksiyonu çağırıldı', state, action)

            state.counter -= 1
        },
        setCounter: (state, action) => {
            console.log('>> setCounter fonksiyonu çağırıldı', state, action)

            // Gelen action objesi şu şekildedir:
            // {type: 'counterSlice/setCounter', payload: 0}

            state.counter = action.payload
        }
    }
})

/**
 * Klasik redux'ta bir dispatch işlemi yapılırken iki yöntem kullanılıyordu. Birincisi dispatch objesini kendimiz
 * oluşturarak dispatch yapmak, ikincisi ise action fonksiyonlarını dispatch yapmak.
 * 
 * Birinci yönteme örnek olarak:
 *    dispatch({
 *        type: "set_counter",
 *        payload: {
 *            counter: 5
 *        }
 *    })
 * 
 * İkinci yönteme örnek:
 *    dispatch(setCounter(5))
 */

// 2. Aşama: counterSlice objesinden dönen action'ları export const ile export yap.
export const { increase, decrease, setCounter } = counterSlice.actions

// 3. Aşama: reducer'ları default olarak export etmek. Bu reducer'lar store tarafından kullanılacak.
export default counterSlice.reducer
