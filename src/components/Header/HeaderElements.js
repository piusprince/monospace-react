import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;

`

export const HeaderSideColor = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 70rem;
    width: 23rem;
    background-color: #A7F0BA;
    
`

export const HeaderLeftContent = styled.div`
    flex: 0 0 50%;
    margin-top: 10rem;
    padding-left: 3rem;
`

export const HeaderRightContent = styled.div`
    flex: 0 0 50%;
    /* background-color: red; */
    z-index: 2;
`

export const HeaderText = styled.div`

`

export const HeaderSubText = styled.p`
    font-size: 1.2rem;
    text-align: center;
`

export const HeaderMainText = styled.h1`
    font-size: 6.1rem;
    text-align: left;
`

export const HeaderBtn = styled.button`
    background-color: #A7F0BA;
    padding: 2rem 5rem;
    border: none;
    border-radius: 5rem;
    justify-content: flex-end;
    margin-top: 5rem;

`

export const HeaderImgWrapper = styled.div`
    height: 100%;
`

export const HeaderImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 11rem 0 0 0;
`