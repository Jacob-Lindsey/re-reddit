import { Wrapper, UserName, OnlineStatus, UserKarma, PostKarma, CommentKarma } from "./styles";

const User = () => {
    return (
        <Wrapper>
            <UserName>Pantzzzzless</UserName>
            <OnlineStatus> --- </OnlineStatus>
            <UserKarma>
                &nbsp;(&nbsp;
                <PostKarma>10,102</PostKarma>
                &nbsp;·&nbsp;
                <CommentKarma>124,439</CommentKarma>
                &nbsp;)&nbsp;
            </UserKarma>
        </Wrapper>
    )

}

export default User;