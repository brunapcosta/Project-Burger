import styled from "styled-components";

export const Container = styled.div`
    height: 140vh;

    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const ContainerItems = styled.div`
    align-items: center;
    height: 130vh;

`;

export const Image = styled.img`
    width: 246px;
    height: 354px;
    
    margin-bottom: 36px;
`;

export const Order = styled.li`
    width: 342px;
    height: 100px;

    margin-bottom: 42px;
    
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    /* order: 0;
    flex-grow: 0; */

`;

export const Div = styled.div`
    margin-top: 50px;
    margin-bottom: 85px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const P1 = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;

    color: #FFFFFF;

`;

export const P2 = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;

    color: #FFFFFF;

`;

export const Delete = styled.div`
    height: 60%;
    display: flex;
    flex-direction: row;
    align-content: flex-end;

    button{
        height: 60%;
        margin-right: 15px;
        align-self: flex-end;
        background: none;
        border: none;
        justify-content: center;
        /* transform: rotateY(180deg); */
        cursor: pointer;
    }
  
`;
