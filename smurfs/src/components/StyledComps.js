import styled from 'styled-components'

export const SmurfCardDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background: skyblue;
    font-weight: bold;
    width: 200px;
    color: white; 
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    border: 3px solid black;
    border-radius: 8px;
`;

export const SmurfCardsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    margin: 20px 40px;
`;

export const SmurfForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    margin: 20px auto;
    align-items: flex-end;
    width: 200px;
    label
    {
        margin: 5px auto;
    }
    input
    {
        background: skyblue;
        text-align: center;
    }
    
`;

export const SmurfButton = styled.button`
    width: 175px;
    background: skyblue;
    margin: 5px auto;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    border-width: 2px;
    border-color: black;
    border-radius: 6px;
`;