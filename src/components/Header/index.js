import React from 'react'
import {
    HeaderWrapper,
    HeaderSideColor,
    HeaderLeftContent,
    HeaderRightContent,
    HeaderText,
    HeaderSubText,
    HeaderMainText,
    HeaderBtn,
    HeaderImgWrapper,
    HeaderImg
} from './HeaderElements'

const Header = ({developersImg}) => {
    return (
        <HeaderWrapper>
            
            <HeaderLeftContent>
                <HeaderSideColor />
                <HeaderText>
                    <HeaderSubText>
                        meet.think.share      
                    </HeaderSubText>
                    <HeaderMainText>
                        The solution space for developers to share ideas
                    </HeaderMainText>
                </HeaderText>

                <HeaderBtn>Join now</HeaderBtn>
            </HeaderLeftContent>

            <HeaderRightContent>

                <HeaderImgWrapper>
                    <HeaderImg src={developersImg}/>               
                </HeaderImgWrapper>

            </HeaderRightContent>
           
        </HeaderWrapper>
    )
}

export default Header
