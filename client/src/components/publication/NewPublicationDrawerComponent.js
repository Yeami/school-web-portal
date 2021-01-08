import React from 'react';
import {Button, Drawer} from 'antd';
import NewPublicationFormComponent from './NewPublicationFormComponent';
import {useDispatch} from 'react-redux';
import {createPublication} from '../../actions/publicationActions';

const NewPublicationDrawerComponent = ({onClose, visible}) => {
  const dispatch = useDispatch();
  let title, content, imageUrl;

  const onTitleChange = (e) => {
    title = e.target.value;
  }

  const onContentChange = (e) => {
    content = e.target.value;
  }

  const onImageChange = (e) => {
    imageUrl = e.target.value;
  }

  const create = () => {
    const publication = {title, content, imageUrl}
    dispatch(createPublication(publication));
  };

  return (
    <Drawer
      title="Create new publication"
      placement="right"
      width={600}
      closable={false}
      onClose={onClose}
      visible={visible}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={create} type="primary" style={{ marginRight: 8 }}>
            Create
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <NewPublicationFormComponent
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
        onImageChange={onImageChange}
      />
    </Drawer>
  );
};

export default NewPublicationDrawerComponent;
