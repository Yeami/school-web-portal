import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {pageWrapper, titleCardWrapper} from '../utils/styles';
import TeacherCardComponent from '../components/teacher/TeacherCardComponent';
import {getAllTeachers} from '../store/actions/teacherActions';

const contentWrapper = {
  display: 'flex',
  flexWrap: 'wrap',
}

function TeachersView({isAuth}) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllTeachers()), [dispatch]);

  const teachers = useSelector(state => state.teacherReducer.teachers);

  // const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    // setVisible(true);
  };

  // const onClose = () => {
  //   setVisible(false);
  // };

  return (
    <div style={pageWrapper}>
      <div style={titleCardWrapper}>
        <h1>Teachers page</h1>
        {
          isAuth ?
            <Button
              type="dashed"
              style={{margin: '1rem 0'}}
              icon={<PlusOutlined/>}
              onClick={showDrawer}
            >
              Add new teacher
            </Button>
            : null
        }
        {/*<NewPublicationDrawerComponent*/}
        {/*  onClose={onClose}*/}
        {/*  visible={visible}*/}
        {/*/>*/}
      </div>

      <div style={contentWrapper}>
        {
          teachers && teachers.length > 0 ?
            teachers.map((p, i) => <TeacherCardComponent {...p} key={i}/>)
            : null
        }
      </div>

    </div>
  );
}

export default TeachersView;
