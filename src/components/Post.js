import React from 'React'
import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time} />
    <p>{data.body}</p>
  </div>
);

export default Post;
