import React from 'react';
import {Button, Drawer} from 'antd';
import {useDispatch} from 'react-redux';
import NewSubjectFormComponent from './NewSubjectFormComponent';
import {createSubject} from '../../store/actions/subjectActions';

const NewSubjectDrawerComponent = ({onClose, visible}) => {
  const dispatch = useDispatch();
  let name, description;

  const onNameChange = (e) => {
    name = e.target.value;
  }

  const onDescriptionChange = (e) => {
    description = e.target.value;
  }

  const create = () => dispatch(createSubject({name, description}));

  return (
    <Drawer
      title="Add new subject"
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
            Add
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <NewSubjectFormComponent
        onNameChange={onNameChange}
        onDescriptionChange={onDescriptionChange}
      />
    </Drawer>
  )
};

export default NewSubjectDrawerComponent;
