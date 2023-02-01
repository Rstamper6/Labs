import { useState } from 'react';
import { Post } from '../models/Post';
import { PostForm } from './PostForm';


export function SocialPosts () {
    const [posts, setPosts] = useState<Post[]>([])

  return (
    <div>
      <PostForm />
      
      {}
    </div>
  );
}
