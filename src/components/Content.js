import styled from "styled-components";
import getScreenSize from "../utils/getScreenSize";

const Content = () => {

    const screenWidth = getScreenSize().width;

    const sampleData = {
        title: "Not sure what you'd call this in basketball terms",
        subreddit: "RocketLeague",
        postedBy: "unintelligentlysmart",
        timePosted: "15 hours ago",
        commentCount: "354",
        karma: "5619",
        flair: "MEME",
        image: null
    }
    
    return (
        <>
        {screenWidth > 768 ?
            <Wrapper>
                <Karma>
                    <span>&#129959;</span>
                    <div>{sampleData.karma}</div>
                    <span>&#129958;</span>
                </Karma>
                <Details>
                    <>
                        {sampleData.title}
                        <FlairDesktop>{sampleData.flair}</FlairDesktop>
                    </>
                    <SubDetails>submitted {sampleData.timePosted} ago by&nbsp; {sampleData.postedBy} &nbsp;to r/{sampleData.subreddit}</SubDetails>
                    <SubDetails>
                        <span>
                            <span>{sampleData.commentCount} comments</span> 
                            <span>source</span>
                            <span>share</span>
                            <span>save</span>
                            <span>hide</span>
                            <span>give award</span>
                            <span>report</span>
                            <span>crosspost</span>
                        </span>
                    </SubDetails>
                </Details>
                <Image></Image>
            </Wrapper>

        :

            <Wrapper>
                <Karma>
                    <span>&#129959;</span>
                    <div>{sampleData.karma}</div>
                    <span>&#129958;</span>
                </Karma>
                <Details>
                    <>
                        <FlairMobile>{sampleData.flair}</FlairMobile>
                        {sampleData.title}
                    </>
                    <SubDetails>to r/{sampleData.subreddit} by {sampleData.postedBy}</SubDetails>
                    <SubDetails>{sampleData.timePosted}</SubDetails>
                    <SubDetails>{sampleData.commentCount} comments</SubDetails>
                </Details>
                <Image></Image>
            </Wrapper>

        }
        </>
    )
}

export default Content;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;

    @media (max-width: 768px) {
        background-color: black;
        border-bottom: 1px solid rgba(158,158,158,0.25);
        display: flex;
        justify-content: center;
        padding: 0px 20px 0px 8px;
        & > span {
            font-size: 0.7rem;
        }
`;

const Karma = styled.div`
    order: 1;
    color: rgb(84,84,84);
    font-weight: 600;
    & > span {
        cursor: pointer;
    }
    & > span:first-child:hover {
        color: rgba(0,220,0,0.7);
    }
    & > span:last-child:hover {
        color: rgba(250,0,0,0.7);
    }


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        order: 1;
        padding: 10px 0px;
        & > span {
            color: rgb(84,84,84);
        }
        & > div {
            color: #fff;
            font-size: 0.78rem;
            font-weight: 600;
        }
    }
`;

const Details = styled.div`
    color: #eee;
    min-width: 50%;
    order: 3;
    text-align: left;

    @media (max-width: 768px) {
        color: #fff;
        font-size: 0.9rem;
        margin: 6px 0px 0px 8px;
        order: 2;
        text-align: left;
    }
`;

const SubDetails = styled.div`
    color: #888;
    font-size: 0.65rem;
    text-align: left;
    
    & > span > span {
        cursor: pointer;
        font-size: 0.73rem;
        font-weight: 600;
        margin-right: 8px;
        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        color: #bbb;
        font-size: 0.65rem;
        font-weight: 300;
        margin-top: 2px;
    }
    
`;

const FlairDesktop = styled.span`
    background-color: rgb(58,58,58);
    display: inline;
    font-size: 0.75rem;
    margin-left: 10px;
    padding: 3px 2px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const FlairMobile = styled.span`
    background-color: rgb(58,58,58);
    display: none;
    font-size: 0.75rem;
    margin-right: 4px;
    padding: 3px 2px;

    @media (max-width: 768px) {
        display: inline;
    }
`;

const Image = styled.div`
    background-color: #777;
    border-radius: 50%;
    height: 3.6rem;
    margin: 0px 10px;
    order: 2;
    width: 3.6rem;

    @media (max-width: 768px) {
        border-radius: 5%;
        height: 3rem;
        margin: auto 0;
        order: 3;
        width: 3.5rem;
    }
`;

const Title = styled.div`

`;