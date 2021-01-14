import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Collapse} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import NewSubjectDrawerComponent from '../components/subject/NewSubjectDrawerComponent';
import SubjectItemExtraComponent from '../components/subject/SubjectItemExtraComponent';
import EditSubjectModalComponent from '../components/subject/EditSubjectModalComponent';

import {getSubjects, removeSubject, updateSubject} from '../store/actions/subjectActions';
import {pageWrapper, titleCardWrapper} from '../utils/styles';

const { Panel } = Collapse;

function SubjectsView(props) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSubjects()), [dispatch]);

  const subjects = useSelector(state => state.subjectReducer.subjects);

  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentSubject, setCurrentSubject] = useState({});

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  let name, description;
  const onNameChange = (e) => {
    name = e.target.value;
  };

  const onDescriptionChange = (e) => {
    description = e.target.value;
  };

  const editClick = (subject) => {
    setCurrentSubject(subject);
    setModalVisible(true);
  }

  const removeClick = (subject) => {
    dispatch(removeSubject(subject));
  }

  const handleModalOk = () => {
    setModalVisible(false);
    dispatch(updateSubject(currentSubject._id, name, description));
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div style={pageWrapper}>
      <div style={titleCardWrapper}>
        <h1>Subjects page</h1>
        {
          props.isAuth ?
            <Button
              type="dashed"
              style={{margin: '1rem 0'}}
              icon={<PlusOutlined/>}
              onClick={showDrawer}
            >
              Add new subject
            </Button>
            : null
        }
        <NewSubjectDrawerComponent
          onClose={onClose}
          visible={isDrawerVisible}
        />
      </div>

      <Collapse style={{width: '64rem'}}>
        {
          subjects.map((s, i) => {
            return <Panel
              header={s.name}
              key={i}
              extra={
                props.isAuth ?
                  <SubjectItemExtraComponent
                    subject={s}
                    editClick={editClick}
                    removeClick={removeClick}
                  /> : null
              }
            >
              <p>{s.description}</p>
            </Panel>
          })
        }
      </Collapse>

      <EditSubjectModalComponent
        subject={currentSubject}
        isVisible={isModalVisible}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
        onNameChange={onNameChange}
        onDescriptionChange={onDescriptionChange}
      />

    </div>
  );
}

export default SubjectsView;
