import { createSlice } from "@reduxjs/toolkit";


const initialState_old = {
    todos: [
        {
            id: 1,
            title: "Header componenti yapılacak",
            owner: "Ayşe",
            is_done: false,
            assigned_at: "12 Apr 2023 13:00",
            target_hour: 2
        },
        {
            id: 2,
            title: "RTK Kurulumu",
            owner: "Burhan",
            is_done: false,
            assigned_at: "12 Apr 2023 15:00",
            target_hour: 6
        },
        {
            id: 3,
            title: "Anasayfa componenti hazırlanacak",
            owner: "Fadime",
            is_done: false,
            assigned_at: "12 Apr 2023 09:00",
            target_hour: 4
        },
        {
            id: 4,
            title: "Route'lar hazırlanacak",
            owner: "Gökhan",
            is_done: false,
            assigned_at: "12 Apr 2023 11:00",
            target_hour: 8
        },
    ]
}

const initialState = {
    todos: Array.apply(null, Array(10000)).map((item, index) => {
        return {
            id: index,
            title: "Route'lar hazırlanacak",
            owner: "Gökhan",
            is_done: false,
            assigned_at: "12 Apr 2023 11:00",
            target_hour: 8
        }
    }),
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addEditTodo: (state, action) => {
            // TODO Burayı doldur.
            console.log('>> todoSlice içerisindeki addTodo reducer fonksiyonu çağırıldı', action)
            /*
            >> todoSlice içerisindeki addTodo reducer fonksiyonu çağırıldı 
            {type: 'todoSlice/addTodo', payload: {…}}
            */

            // Buraya kadar gelen json datasının içerisinde `id` bilgisi mevcut olmayabilir.
            // Eğer id bilgisi mevcut değilse bu ekleme yapılacak anlamına gelir,
            // eğer id bilgisi varsa bu da düzenleme yapılacak anlamına gelir.

            if (action.payload.id) {
                // id mevcut, o zaman düzenleme yapılacak
                // Örnek payload şu şekilde olabilir:
                // {id: '4', title: "Route'lar hazırlanacak", owner: 'Gökhan', assigned_at: '12 Apr 2023 11:00', target_hour: '8'}

                action.payload.id = parseInt(action.payload.id)

                const foundIndex = state.todos.findIndex((item) => item.id === action.payload.id)

                state.todos[foundIndex] = action.payload

            } else {
                // id mevcut değil, o zaman ekleme yapılacak.

                // ekleme yapılabilmesi için mevcut en büyük id'yi bulup üzerine 1 ekleyip bu yeni id'yi
                // json datasına set etmemiz gerekiyor.
                const maxId = (state.todos.length === 0) ? 0 : state.todos[state.todos.length - 1].id

                action.payload.id = maxId + 1

                state.todos.push(action.payload)
            }

        },
        removeTodo: (state, action) => {
            /**
             * Bir diziden bir item'i silmek için birkaç farklı yöntem mevcuttur. Bu yöntemler bazı farklı
             * dizi fonksiyonları kullanılarak türetilebilir. Biz burada iki tane yöntem göreceğiz. Birinci
             * yöntemde eski dizi üzerinden filter kullanarak yeni bir dizi üretmek ve bu üretilen diziyi
             * state'e aktarmak. İkinci yöntem ise mevcut diziden silinmesi gereken index'i bulup
             * doğrudan bu indexi silmek.
             */

            let time = 0

            /**
             * Birinci yöntem: filter metoduyla dizi oluşturmak. Bu yöntem pek sağlıklı bir yöntem değildir
             * çünkü büyük boyutlu bir dizi içerisindeki bir indexi silmek için yine büyük boyutlu
             * başka bir dizi oluşturulması gerekiyor. Bu da gereksiz yere hafıza kaybı demektir.
             * Örneğin `state.todos` içerisinde 10000 tane data olursa `newTodos` dizisinin içerisinde de
             * 9999 tane data mevcut olacaktır. Bu da gereksiz yere hafıza kaybı anlamına gelir.
             */
            time = window.performance.now()
            console.log('Memory 1', window.performance.memory)
            const newTodos = state.todos.filter((item) => item.id !== action.payload);
            state.todos = newTodos;
            console.log('Memory 2', window.performance.memory)
            time = window.performance.now() - time
            console.log('Total time 1: ', time)

            // İkinci yöntem
            time = window.performance.now()
            console.log('Memory 3', window.performance.memory)
            //const foundIndex = state.todos.findIndex((item) => item.id === action.payload)
            //state.todos.splice(foundIndex, 1)
            console.log('Memory 4', window.performance.memory)
            time = window.performance.now() - time
            console.log('Total time 2: ', time)

            /**
             * ÖDEV: Büyük boyutlu diziler üzerinde çalışırken yukarıda belirtilen yöntemlerin kaç saniye
             * sürdüğünü bulun ve konsolda loglayın.
             */
        },
        clearTodo: (state, action) => {
            state.todos = []
        }
    }
})

/**
 * Action fonksiyonları RTK tarafından oluşturulur ve bu fonksiyonların isimleri
 * yukarıda bizim oluşturduğumuz reducer fonksiyon isimleriyle aynıdır.
 * İsimleri aynı olmasına rağmen yaptıkları işler farklıdır.
 */
export const {
    addEditTodo,
    removeTodo,
    clearTodo,
} = todoSlice.actions

export default todoSlice.reducer
