import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Content from "./Content";
import PostDetails from "./PostDetails";


export const sampleData = [
    {
        id: 1,
        title: "Not sure what you'd call this in basketball terms",
        subreddit: "RocketLeague",
        postedBy: "unintelligentlysmart",
        timePosted: "15 hours ago",
        commentCount: "354",
        karma: "5619",
        flair: "MEME",
        image: null
    },
    {
        id: 2,
        title: "Night Taxi, Me, Oil on hardboard 12''x16'', 2021",
        subreddit: "Art",
        postedBy: "kznsq",
        timePosted: "7 hours ago",
        commentCount: "92",
        karma: "9645",
        flair: "Artwork",
        image: null
    },
    {
        id: 3,
        title: "Not sure what you'd call this in basketball terms",
        subreddit: "RocketLeague",
        postedBy: "unintelligentlysmart",
        timePosted: "15 hours ago",
        commentCount: "354",
        karma: "5619",
        flair: "MEME",
        image: null
    },
    {
        id: 4,
        title: "Night Taxi, Me, Oil on hardboard 12''x16'', 2021",
        subreddit: "Art",
        postedBy: "kznsq",
        timePosted: "7 hours ago",
        commentCount: "92",
        karma: "9645",
        flair: "Artwork",
        image: null
    },
    {
        id: 5,
        title: "Not sure what you'd call this in basketball terms",
        subreddit: "RocketLeague",
        postedBy: "unintelligentlysmart",
        timePosted: "15 hours ago",
        commentCount: "354",
        karma: "5619",
        flair: "MEME",
        image: null
    },
    {
        id: 6,
        title: "Night Taxi, Me, Oil on hardboard 12''x16'', 2021",
        subreddit: "Art",
        postedBy: "kznsq",
        timePosted: "7 hours ago",
        commentCount: "92",
        karma: "9645",
        flair: "Artwork",
        image: null
    }
];


const Posts = () => {

    const match = useRouteMatch();

    
    const postsToRender = sampleData.map((post) => {
        return (
            <Link to={match.url+post.id} key={post.id}>
                <Content
                    postData={post}
                />
            </Link>
        );
    })
    
    return (
        <>
            <Switch>
                <Route exact path={match.path}>
                    {postsToRender}
                </Route>
                <Route path={`${match.path}/:postId`}>
                    <PostDetails />
                </Route>
            </Switch>
        </>
    )
}

export default Posts;