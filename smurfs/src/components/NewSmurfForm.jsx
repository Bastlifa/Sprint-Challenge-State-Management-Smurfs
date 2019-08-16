import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getSmurfs, postSmurfs, putSmurfs} from "../actions"
import { SmurfForm, SmurfButton, ErrorP } from './StyledComps'

const NewSmurfForm = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [smurfInput, setSmurfInput] = useState({name: '', age: '', height: '', id: state.smurfs.length})
    
    useEffect(_ =>
        {
            console.log('inf loop?', state)
            if(state.isEditing && (state.edtiginID || state.editingID >= 0)) 
            {
                console.log('smurf to edit', state.smurfs[state.editingID])
                setSmurfInput(state.smurfs[state.editingID]) 
            }
        }, [state.isEditing, state.editingID])

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

    const handleSubmit = async event =>
    {
        event.preventDefault()
        if(!state.isEditing)
        {
            await dispatch(postSmurfs(smurfInput))
        }
        else
        {
            await dispatch(putSmurfs(smurfInput))
        }
        dispatch(getSmurfs())
        setSmurfInput({...smurfInput, name: '', age: '', height: ''})
    }

    return (
        <>
            <SmurfButton onClick={getBtnClick}>Get Smurfs</SmurfButton>
        <SmurfForm>
            <label>
                Smurf Name:
                <input type="text" name="name" value={smurfInput.name} onChange={handleChange} />
            </label>
            <label>
                Smurf Age:
                <input type="number" name="age" className="num" value={smurfInput.age} onChange={handleChange}/>
            </label>
            <label>
                Smurf Height:
                <input type="text" name="height" value={smurfInput.height} onChange={handleChange}/>
            </label>
            <SmurfButton type="submit" onClick={handleSubmit}>{state.isEditing ? `Edit Smurf!` : `Submit Smurf!`}</SmurfButton>
        </SmurfForm>
        {/* <ErrorP>{state.error.response.Error}</ErrorP> */}
        {state.error ? <ErrorP>{state.error}</ErrorP> : null}
        </>
    )
}

export default NewSmurfForm