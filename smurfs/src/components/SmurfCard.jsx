import React from "react"
import {useDispatch} from "react-redux"
import { SmurfCardDiv } from './StyledComps'
import { setEditing } from '../actions'

const SmurfCard = props =>
{
    
    const dispatch = useDispatch()

    const handleClick = _ =>
    {
        dispatch(setEditing(props.smurf.id))
    }

    return (
        <SmurfCardDiv onClick={handleClick}>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfCardDiv>
    )
}

export default SmurfCard