import React from "react"
import {useDispatch} from "react-redux"
import { SmurfCardDiv } from './StyledComps'

const SmurfCard = props =>
{
    const dispatch = useDispatch()

    return (
        <SmurfCardDiv>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfCardDiv>
    )
}

export default SmurfCard