import { SET_CATEGORIES } from "../categoryReducer";

export default function setCategoryAction(payload) {
    return {
        type: SET_CATEGORIES,
        payload
    }
}
