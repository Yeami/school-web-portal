import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Collapse} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import NewSubjectDrawerComponent from '../components/subject/NewSubjectDrawerComponent';
import SubjectItemExtraComponent from '../components/subject/SubjectItemExtraComponent';

import {getSubjects, removeSubject} from '../store/actions/subjectActions';
import {pageWrapper, titleCardWrapper} from '../utils/styles';

const { Panel } = Collapse;

function SubjectsView(props) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSubjects()), [dispatch]);

  const subjects = useSelector(state => state.subjectReducer.subjects);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const editClick = (subject) => {
    console.log('editClick', subject);
  }

  const removeClick = (subject) => {
    console.log('removeClick', subject);
    dispatch(removeSubject(subject));
  }

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
          visible={visible}
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
    </div>
  );
}

export default SubjectsView;
