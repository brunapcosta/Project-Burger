import styled from "styled-components";

export const Container = styled.div`
    height: 110vh;

    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerItems = styled.div`
    align-items: center;
    height: 100vh;

`;

export const Image = styled.img`
    width: 342px;
    height: 300px;
    
    margin: 11px;
`;

export const ContainerInput = styled.div`
 margin-top: 76px;
 margin-bottom: 34px;
`;

export const InputLabel = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 30px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    letter-spacing: -0.408px;

    color: #EEEEEE;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;

    margin-bottom: 42px;
    
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;

    color: #FFFFFF;
    ::placeholder{
        font-weight: 400;
    }
`;