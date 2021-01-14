import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Tabs} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {pageWrapper} from '../utils/styles';
import {createClass, getClasses} from '../store/actions/classActions';
import NewClassModalComponent from '../components/class/NewClassModalComponent';
import NewStudentDrawerComponent from '../components/class/NewStudentDrawerComponent';
import StudentItemComponent from '../components/class/StudentItemComponent';

const { TabPane } = Tabs;

const headerWrapper = {
  display: 'flex',
  flexDirection: 'column',
  width: '64rem',
  backgroundColor: '#fafafa',
}

const buttonsWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
}

const contentWrapper = {
  backgroundColor: '#fff',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '0.25rem',
  marginTop: '1rem',
}

function ClassesView() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  let name;
  const onClassNameChange = (e) => {
    name = e.target.value;
  };

  useEffect(() => dispatch(getClasses()), [dispatch]);

  const classes = useSelector(state => state.classReducer.classes);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    dispatch(createClass(name));
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div style={pageWrapper}>
      <div style={headerWrapper}>
        <h1>Classes page</h1>

        <div style={buttonsWrapper}>
          <Button
            type="dashed"
            icon={<PlusOutlined/>}
            onClick={showModal}
          >
            Create new class
          </Button>

          <Button
            type="dashed"
            icon={<PlusOutlined/>}
            onClick={showDrawer}
          >
            Add new student
          </Button>
        </div>

        <div style={contentWrapper}>

          <Tabs tabPosition="left">
            {
              classes.map((c, i) => {
                return <TabPane tab={c.name} key={c._id}>
                  <StudentItemComponent students={c.students} key={i}/>
                </TabPane>
              })
            }
          </Tabs>

        </div>
      </div>

      <NewClassModalComponent
        isVisible={isModalVisible}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
        onChange={onClassNameChange}
      />

      <NewStudentDrawerComponent
        onClose={onClose}
        visible={isDrawerVisible}
        classes={classes}
      />
    </div>
  );
}

export default ClassesView;
