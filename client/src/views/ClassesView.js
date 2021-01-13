import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Tabs} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {pageWrapper} from '../utils/styles';
import NewClassModalComponent from '../components/class/NewClassModalComponent';
import {createClass, getClasses} from '../store/actions/classActions';

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

  let name;
  const onClassNameChange = (e) => {
    name = e.target.value;
  };

  useEffect(() => dispatch(getClasses()), [dispatch]);

  const classes = useSelector(state => state.classReducer.classes);
  console.log(classes);

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
          >
            Add new student
          </Button>
        </div>

        <div style={contentWrapper}>

          <Tabs tabPosition="left">
            {
              classes.map((c, i) => {
                return <TabPane tab={c.name} key={c._id}>
                  Content of Tab Pane 1
                </TabPane>
                // <PublicationCardComponent {...p} key={i}/>
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
    </div>
  );
}

export default ClassesView;
