import * as React from 'react';
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import "../css/PostForm.css"

export interface PostFormProps {
}

export function PostForm (props: PostFormProps) {
  return (
    <div className='postForm'>
      <Row>
        <Col></Col>

        <Col>
          <Button className='newPostButtons'>New Post</Button>
          <div>
            <Form>
              <Label>Title</Label>
              <Button>X</Button>

              <Input bsSize="sm"/>
              <Label>Thought</Label>
              <Input bsSize='sm'/>
            </Form>
          </div>
        </Col>

        <Col></Col>
      </Row>

    </div>
  );
}
