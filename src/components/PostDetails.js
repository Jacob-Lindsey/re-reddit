import { sampleData } from "./Posts";

const PostDetails = (postId) => {
    return (
        <div>
            POST DETAILS 
            {sampleData[postId.postId-1].title}
            {sampleData[postId.postId-1].subreddit}
            {sampleData[postId.postId-1].postedBy}
        </div>
    )
}

export default PostDetails;