import * as React from 'react';
import { IPost } from '../models/Post';
import { Button } from 'reactstrap';
import '../css/postList.css'
import { useState } from 'react';

interface PostProps {
  post: IPost
}


export function Post (props: PostProps) {
  const [isActive, setIsActive] = useState<boolean>(true)

  function removePost(){
    setIsActive(false)
  }
  
  return (
    <div className='postDiv'>

      { isActive ? 
        <>
          <div className='titleThought'>
            <h1>{props.post.title}</h1>
            <p>{props.post.thought}</p>
          </div>
      
          <div className='trash'>
            <Button onClick={removePost}>Trash</Button>
          </div>
        </>
        :
        <></>
      }


    </div>
  );
}
