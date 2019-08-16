import axios from 'axios'
export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAIL = "POST_SMURF_FAIL"
export const PUT_SMURF_START = "PUT_SMURF_START"
export const PUT_SMURF_SUCCESS = "PUT_SMURF_SUCCESS"
export const PUT_SMURF_FAIL = "PUT_SMURF_FAIL"
export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL"

export const getSmurfs = _ => dispatch =>
{
    dispatch({ type: FETCH_SMURF_START })
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res =>
            {
                console.log(res)
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            }
        )
        .catch(err => 
            {
                console.log(err)
                dispatch({ type: FETCH_SMURF_FAIL, payload: err.results })
            }
        )
}

export const postSmurfs = newSmurf => dispatch =>
{
    console.log('newSmurf', newSmurf)
    dispatch({ type: POST_SMURF_START })
    axios
        .post('http://localhost:3333/smurfs/', newSmurf)
        .then(res =>
            {
                console.log(res)
                dispatch({ type: POST_SMURF_SUCCESS, payload: newSmurf })
            }
        )
        .catch(err => 
            {
                console.log(err)
                dispatch({ type: POST_SMURF_FAIL, payload: err })
            }
        )
}