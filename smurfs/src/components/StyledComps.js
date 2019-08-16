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