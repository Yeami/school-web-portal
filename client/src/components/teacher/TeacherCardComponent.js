import React from 'react';
import {Card} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import moment from 'moment';

const {Meta} = Card;

const teacherCardWrapper = {
  display: 'inline-block',
  margin: '10px 0 0 10px',
  flexGrow: 1,
  height: '100px',
  width: 'calc(100% * (1/4) - 10px - 1px)'
};

const TeacherCardComponent = (teacher) => {
  const fullName = `${teacher.firstName} ${teacher.lastName} ${teacher.patronymic}`;
  const birthDate = moment(teacher.birthDate).format('Do MMMM YYYY');
  const dateJoined = moment(teacher.dateJoined).format('Do MMMM YYYY');

  return (
    <div style={teacherCardWrapper}>
      <Card
        style={{width: 300}}
        cover={
          <img
            src={teacher.avatarUrl}
            alt="Teacher`s avatar"
            style={{height: 400}}
          />
        }
        actions={[
          <SettingOutlined key="setting"/>,
          <EditOutlined key="edit"/>,
          <EllipsisOutlined key="ellipsis"/>,
        ]}
      >
        <Meta
          title={fullName}
          description={teacher.position.name}
        />

        <br/>
        <span>Birth date: {birthDate}</span>
        <br/>
        <span>Date joined: {dateJoined}</span>
        <br/>
        <span>Email: {teacher.email}</span>
      </Card>
    </div>
  )
};

export default TeacherCardComponent;
