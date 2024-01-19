import React from 'react';
import './App.css';
import styled from "styled-components";
import mainPicture from './img/Rectangle.png'

function App() {
    return (
        <div className="App">
            <Card>
                <StyledImg><img src={mainPicture} alt="mainPicture"/></StyledImg>
                {/*<StyledTitle>Headline</StyledTitle>*/}
                <MainContent>
                    <h1>Headline</h1>
                </MainContent>
                <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.</StyledText>
                <ContentBtn>
                    <StyledBtn><p>See more</p></StyledBtn>
                    <SuperButton><p>Save</p></SuperButton>
                </ContentBtn>
            </Card>

        </div>
    );
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    margin: 0 auto;
    padding: 10px 10px 170px 10px;
    //gap: 10px;

    button {
        cursor: pointer;
    }
`

const StyledImg = styled.div`
    width: 280px;
    height: 170px;
    //flex-shrink: 1;
    border-radius: 10px;
    justify-content: center;
`

const MainContent = styled.div`
    //display: flex;
    //justify-content: flex-start;

    h1 {
        color: #0c0c0c;
        font-family: Inter, serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 10px;
    }
`

// const StyledTitle = styled.h1`
//     display: flex;
//     color: #0c0c0c;
//     font-family: Inter, serif;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: normal;
//     margin: 20px;
//     //justify-content: flex-start;
// `

const StyledText = styled.p`
    width: 260px;
    color: #ABB3BA;
    font-family: Inter, serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    margin: 10px;
`

const ContentBtn = styled.div`
    display: flex;
    margin-bottom: 22px;
`

const StyledBtn = styled.button`
    //display: flex;
    //flex-direction: column;
    border: none;
    color: #fff;
    width: 86px;
    height: 30px;
    flex-shrink: 0;
    background-color: #4e71fe;
    border-radius: 5px;
    margin: 10px;
    //gap: 12px;

    p {
        color: #FFF;
        font-family: Inter, serif;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 200% */
    }
`

const SuperButton = styled(StyledBtn)`
    border: 2px solid #4E71FE;
    background-color: #fff;
    color: #4e71fe;
    margin-left: 12px;

    p {
        color: #4E71FE;

        font-family: Inter, serif;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 200% */
    }
`

export default App;
