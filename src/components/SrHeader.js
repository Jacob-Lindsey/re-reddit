import styled from "styled-components";

const SrHeader = () => {



    return (
        <Wrapper>
            <ul>
                <li><a href='/'>MY SUBREDDITS</a></li>
                -
                <li><a href='/'>DASHBOARD</a></li>
                -
                <li><a href='/'>HOME</a></li>
                -
                <li><a href='/'>POPULAR</a></li>
                -
                <li><a href='/'>ALL</a></li>
                -
                <li><a href='/'>RANDOM</a></li>
                -
                <li><a href='/'>USERS</a></li>
                -
                <li><a href='/'>FRIENDS</a></li>
                -
                <li><a href='/'>MOD</a></li>
                -
                <li><a href='/'>MODQUEUE</a></li>
                -
                <li><a href='/'>SAVED</a></li>
                -
                <li><a href='/'>EDIT</a></li>
            </ul>
        </Wrapper>
    )
}

export default SrHeader;

const Wrapper = styled.header`
    background-color: rgb(204,204,204);
    height: 30%;
    padding-left: 6px;
    position: absolute;
    top: 0;
    width: 100%;
    & > ul {
        display: flex;
        font-size: 0.57rem;
        font-weight: 400;
        gap: 5px;
        justify-content: flex-start;
        line-height: 1.2rem;
    }
    & > ul > li > a {
        color: #222;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;