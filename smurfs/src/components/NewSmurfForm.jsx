import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getSmurfs, postSmurfs} from "../actions"

const NewSmurfForm = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    
    const [smurfInput, setSmurfInput] = useState({name: '', age: '', height: '', id: state.smurfs.length})

    const getBtnClick = event =>
    {
        event.preventDefault()
        console.log("inf?")
        dispatch(getSmurfs())
    }

    const handleChange = event =>
    {
        setSmurfInput({...smurfInput, [event.target.name]: event.target.value})
    }

    const handleSubmit = event =>
    {
        console.log('newSmurf', smurfInput)
        event.preventDefault()
        dispatch(postSmurfs(smurfInput))
    }

    return (
        <>
            <button onClick={getBtnClick}>Get Smurfs</button>
        <form>
            <label>
                Smurf Name:
                <input type="text" name="name" value={smurfInput.name} onChange={handleChange} />
            </label>
            <label>
                Smurf Age:
                <input type="number" name="age" value={smurfInput.age} onChange={handleChange}/>
            </label>
            <label>
                Smurf Height:
                <input type="text" name="height" value={smurfInput.height} onChange={handleChange}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit Smurf!</button>
        </form>
        </>
    )
}

export default NewSmurfForm