import * as React from 'react';
import { Button, Col, Form, Input, Label, Modal, Row } from 'reactstrap';
import "../css/PostForm.css"
import { useState } from 'react';

export interface PostFormProps {
  addPost: Function
}



export function PostForm (props: PostFormProps) {

  const [title, setTitle] = useState<string>('')
  const [thought, setThought] = useState<string>('')

  function onSubmit(e: React.FormEvent<HTMLElement>){
    e.preventDefault();
    setIsOpen(false)
    props.addPost({title: title, thought: thought})
  }

  let subtitle: { style: { color: string; }; };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }




  return (
    <div className='postForm'>
      <Button onClick={openModal} className='newPostButtons'>New Thought</Button>
      
      <div className='modalDiv'>
        <Modal
          className='formModal'
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal">

          <div className='actualForm'>
            <Form onSubmit={onSubmit}>
              <div className='titleXbut'>
                <Label>Title</Label>
                <Button onClick={closeModal} className='xBut'>X</Button>
              </div>

              <Input onChange={(e) => setTitle(e.target.value)} bsSize="sm"/>

              <Label>Thought</Label>
              <textarea className='thought' onChange={(e) => setThought(e.target.value)}/>
              <Button className='submitButton' type='submit'>Add Post</Button>
            </Form>
          </div>
        </Modal>
      </div>
      

    </div>
  );
}

