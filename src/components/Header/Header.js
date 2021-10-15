import { useState } from "react";
import { Wrapper, HeaderLeft, HeaderRight, HeaderImg, Separator,
         Inbox, Preferences, Logout } from "./styles";
import MobileHeader from "../MobileHeader/MobileHeader";
import SrHeader from "../SrHeader";
import TabMenu from "./TabMenu/TabMenu";
import User from "./User/User";

const Header = () => {



    return (
        <>
            <Wrapper>
                <SrHeader></SrHeader>

                <HeaderLeft>
                    
                    <HeaderImg><span>re</span>.reddit</HeaderImg>
                    <TabMenu />
                
                </HeaderLeft>


                <HeaderRight>

                    <User />
                    <Separator>|</Separator>
                    <Inbox></Inbox>
                    <Separator>|</Separator>
                    <Preferences>preference</Preferences>
                    <Separator>|</Separator>
                    <Logout>logout</Logout>

                </HeaderRight>
            </Wrapper>
            <MobileHeader />
        </>
    )
}

export default Header;

