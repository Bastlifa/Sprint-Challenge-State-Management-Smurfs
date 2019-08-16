import React from "react"
import {useSelector} from "react-redux"
import SmurfCard from './SmurfCard'
import {SmurfCardsDiv} from './StyledComps'

const SmurfCards = _ =>
{
    const state = useSelector(state => state)
    console.log('state from cards', state)
    return (
        <SmurfCardsDiv>
            {state.smurfs && state.smurfs.length > 0 && state.smurfs.map(smurf => <SmurfCard smurf={smurf} key={smurf.name} />)}
        </SmurfCardsDiv>
    )
}

export default SmurfCards