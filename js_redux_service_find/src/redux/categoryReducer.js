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
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                categories: action.payload
            }

        default:
            return state;
    }
}

