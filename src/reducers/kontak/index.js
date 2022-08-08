import { GET_LIST_KONTAK } from "../../actions/KontakActions";

const initialState = {
    getListKontaksResult: false,
    getListKontaksLoading: false,
    getListKontaksError: false
};

const kontak = (state = initialState, action) => {
    console.log("aCITONS", action);

    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontaksResult: action.payload.data,
                getListKontaksLoading: action.payload.loading,
                getListKontaksError: action.payload.errorMessage

            }
        default:
            return state;
    }
}

export default kontak;