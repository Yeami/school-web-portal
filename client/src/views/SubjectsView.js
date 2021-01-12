import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Collapse} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import NewSubjectDrawerComponent from '../components/subject/NewSubjectDrawerComponent';
import {pageWrapper, titleCardWrapper} from '../utils/styles';
import {getSubjects} from '../store/actions/subjectActions';

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
          subjects.map((p, i) => {
            return <Panel header={p.name} key={i}> <p>{p.description}</p> </Panel>
          })
        }
      </Collapse>
    </div>
  );
}

export default SubjectsView;
