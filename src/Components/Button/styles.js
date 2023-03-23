import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 68px;
    
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    border-radius: 14px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #FFFFFF;

    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;