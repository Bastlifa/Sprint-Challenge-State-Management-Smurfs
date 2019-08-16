import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAIL, 
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    getSmurfs, 
    postSmurfs 
} from '../actions'

const initialState = 
{
    smurfs: [],
    isFetching: false,
    error: "",
    isPosting: false
}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: "",
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                smurfs: action.payload
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                smurfs: []
            }
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true,
                error: ""
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: "",
                smurfs: [...state.smurfs, action.payload]
            }
        case POST_SMURF_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload,
            }
        default:
            return state
    }
}