import styled, {css} from "styled-components";

export const ContentBtn = styled.div`
    display: flex;
    margin-bottom: 22px;
`

type StyledBtnPropsType = {
    color?: string
    colorBtnText?: string
    btnType?: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    //display: flex;
    //flex-direction: column;
    border: none;
    color: #fff;
    width: 86px;
    height: 30px;
    flex-shrink: 0;
    background-color: ${props => props.color || "#7d0fc5"};
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
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        
    `}
    
    
`
/*
export const SuperButton = styled(StyledBtn)`
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
        line-height: 20px; /!* 200% *!/
    }
`*/
