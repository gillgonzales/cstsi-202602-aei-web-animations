import styled from "styled-components";

export const HamburgerStyled = styled.div`
    
    background: transparent;
    border: ${props=>props?.$hasBorder ? '2px solid' : 'none'};
    border-color: ${props=>props?.color?props.color:'#999'};
    border-radius: 5px;
    transition: 1s;

    &:hover{
        border-color: ${props=>props?.$hasBorder ? props?.color?props.color:'#333': 'none'};
        transition: 1s;
    }
`;