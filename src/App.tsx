import React from 'react';
import './App.css';
import styled from "styled-components";
import mainPicture from './img/Rectangle.png'
import {StyledImgStyled} from "./components/StyledImg.styled";
import {MainContent} from "./components/MainContent.styled";
import {StyledTextStyled} from "./components/StyledText.styled";
import {ContentBtn, StyledBtn, /*SuperButton*/} from "./components/ContentButton.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Card>
                <StyledImgStyled><img src={mainPicture} alt="mainPicture"/></StyledImgStyled>
                {/*<StyledTitle>Headline</StyledTitle>*/}
                <MainContent>
                    <h1>Headline</h1>
                </MainContent>
                <StyledTextStyled>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.</StyledTextStyled>
                <ContentBtn>
                    <StyledBtn color={"blue"} colorBtnText={"white"} btnType={"primary"}><p>See more</p></StyledBtn>
                    <StyledBtn color={"blue"} colorBtnText={"blue"} btnType={"outlined"}><p>See more</p></StyledBtn>
                    {/*<StyledBtn><p>See more</p></StyledBtn>*/}
                    {/*<SuperButton><p>Save</p></SuperButton>*/}
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
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
    margin: 0 auto;
    padding: 10px 10px 170px 10px;
    //gap: 10px;

    button {
        cursor: pointer;
    }
    
    @media ${myTheme.media.tablet} {
        flex-direction: column;
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

export default App;
