import React from 'react';
import Heading from "./Heading";
import {PostsType} from "../pages/posts";


const PostInfo: ({post}: { post: PostsType }) => JSX.Element = ({post}) => {
    const {title, body} = post || {}

    if (!post) {
        return <Heading text={"Empty contact"} tag={"h3"}/>
    }
    return (
        <>
            <Heading text={title} tag={"h3"}/>
            <div><strong>Body: </strong>{body}</div>
        </>
    );
};

export default PostInfo;