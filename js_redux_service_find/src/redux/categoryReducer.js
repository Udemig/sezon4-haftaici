export const SET_CATEGORIES = "set_categories"

/**
 * Action objelerini oluşturmak için birden fazla yöntem kullanmak mümkün.
 * Bu yöntemlerin hepsi aynı seviyede iş görür. Hangisi sizin için daha kolay ise
 * o yöntemi kullanabilirsiniz.
 * 
 * 1- Birinci yöntem: Her action için bir dosya oluşturmak.
 * 2- İkinci yöntem: Reducer'ı ilgilendiren actionları aynı dosyada toplamak.
 * 3- Üçüncü yöntem: Action objelerini kendimiz oluşturma yöntemi.
 */
export const setCategoryAction = (payload) => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}

const initailState = {
    categories: []
}

export default function categoryReducer(state = initailState, action) {
    console.log('>> Category Reducer function called', state, action)

    /**
     * Yukarıdaki log çıktısına ait örnekler:
     * >> Category Reducer function called {categories: Array(0)} {type: '@@redux/INITd.t.h.i.w.8'}
     * >> Category Reducer function called {categories: Array(0)}categories: [][[Prototype]]: Object {type: '@@redux/PROBE_UNKNOWN_ACTIONn.0.j.m.7.v'}
     * >> Category Reducer function called {categories: Array(0)} {type: '@@redux/INITd.t.h.i.w.8'}
     * 
     * 
     * >> Category Reducer function called {categories: Array(0)} {type: 'set_categories', payload: Array(23)}
     * >> Category Reducer function called {categories: Array(23)} {type: 'set_categories', payload: Array(23)}
     */


    switch (action.type) {
        case SET_CATEGORIES:
            return {
                categories: action.payload
            }

        default:
            return state;
    }
}

