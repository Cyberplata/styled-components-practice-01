import React from 'react';
import './App.css';
import styled from "styled-components";
// import imgP from './img/Rectangle1.png'

function App() {
    return (
        <div className="App">
            <Card>
                <StyledImg></StyledImg>
                <StyledTitle>Headline</StyledTitle>
            </Card>
        </div>
    );
}

const Card = styled.div`
    //display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    
    button {
        cursor: pointer;
    }
`

const StyledImg = styled.div`
    width: 280px;
    height: 170px;
    flex-shrink: 1;
    border-radius: 10px;
    background: url('https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsYefiKjkz1ssan~3dzM8Zyzr~3ZEtaVH35bTrHLrx7AaGaBa-xogHvUkrxS9hkZO-9Q8r-~XsLvQHAxz3U1SkSxcqwgtecT33x6m~pOuLpKveImOj4-ylPvcdW~NbGXV55BSAzbwHgBMF7zYsSxbpwOsZZ9KuI50QYnMJ9w7Nkcprjj6oG6fb3A4vXL9sPYoF12Qjjb45hzpC-j1WJ8rf23kioguKV9LyIJ71k~I972aCgqf3Culf6JU6rK-VGsuN2luxGZD24CkoyhfT3Q8wcN5grQ1lqXV96HwyAv4uP348y8LRrT7GLOeCCx8qayXmYDEAlwrKuIqly9xXpLXw__');
`

const StyledTitle = styled.h1`
    display: flex;
    color: #0c0c0c;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 10px;
`

export default App;
