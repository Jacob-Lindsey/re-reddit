import { useState } from "react";
import { Wrapper, HeaderLeft, HeaderRight, HeaderImg, Separator,
         Inbox, Preferences, Logout } from "./styles";
import MobileHeader from "../MobileHeader/MobileHeader";
import SrHeader from "../SrHeader";
import TabMenu from "./TabMenu/TabMenu";
import User from "./User/User";
import inboxEmpty from "../../images/inbox-empty.png";
import inboxActive from "../../images/inbox-active.png";

const Header = () => {

    const [isInboxActive, setIsInboxActive] = useState(false);

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
                    <Inbox img={isInboxActive ? inboxActive : inboxEmpty}></Inbox>
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

