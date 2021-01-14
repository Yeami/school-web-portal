import React from 'react';

import {Avatar, Button, Popconfirm} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import moment from 'moment';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function ProfileGeneralInfoComponent({user, logOut, logOutAll, showModal}) {
  const birthDate = moment(user.birthDate).format('Do MMMM YYYY');
  const dateJoined = moment(user.dateJoined).format('Do MMMM YYYY');

  return (
    <div style={wrapper}>
      <Avatar size={192} src={user.avatarUrl}/>

      <div style={{textAlign: 'center'}}>
        <Button
          type="dashed"
          style={{margin: '1rem 0'}}
          icon={<PlusOutlined/>}
          onClick={showModal}
        >
          Upload photo
        </Button>
        <br/>
        <span>
          <b>Position:</b> {user.position.name}
        </span>
        <br/>
        <span>
          <b>Birth date:</b> {birthDate}
        </span>
        <br/>
        <span>
          <b>Date joined:</b> {dateJoined}
        </span>
      </div>

      <div style={{marginTop: '1.5rem'}}>
        <Popconfirm
          title="Are you sure to log out from this device?"
          onConfirm={logOut}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">Log out</Button>
        </Popconfirm>

        <Popconfirm
          title="Are you sure to log out from all devices?"
          onConfirm={logOutAll}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Log out from all devices</Button>
        </Popconfirm>
      </div>
    </div>
  )
}

export default ProfileGeneralInfoComponent;