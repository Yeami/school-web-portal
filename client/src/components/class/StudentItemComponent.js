import React from 'react';
import {Avatar, List} from 'antd';

const StudentItemComponent = ({students}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={students}
      renderItem={(student, i) => (
        <List.Item actions={[
          // <a><CloseOutlined/></a>
        ]}>
          <List.Item.Meta
            avatar={<Avatar src={student.photoUrl}/>}
            title={`${i + 1}. ${student.firstName} ${student.lastName} ${student.patronymic}`}
            description={student.email}
          />
        </List.Item>
      )}
    />
  )
};

export default StudentItemComponent;
