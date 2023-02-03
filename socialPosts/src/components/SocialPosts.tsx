import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { IPost } from '../models/Post';
import { PostForm } from './PostForm';
import { Post } from './PostInList';
import '../css/posts.css'


export function SocialPosts () {
    const [posts, setPosts] = useState<IPost[]>([])

    function addPost(post:IPost){
      setPosts([...posts, post])
    }

  return (
    <div className='postsDiv'>

      <PostForm addPost={addPost}/>
  
      <div className='posts'>
        { posts.map((post) => <Post post={post}/>) }
      </div>

    </div>
  );
}
