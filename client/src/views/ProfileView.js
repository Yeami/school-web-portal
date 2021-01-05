import React, { useState } from 'react';

import {useSelector} from 'react-redux';
import ProfileFormComponent from '../components/profile/ProfileFormComponent';
import {Avatar, Button} from 'antd';
import moment from 'moment'
import {PlusOutlined} from "@ant-design/icons";

const pageWrapper = {
  display: 'flex',
  justifyContent: 'center',
};

const cardWrapper = {
  width: '64rem',
  border: '1px solid rgba(0,0,0,0.15)',
  borderRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
};

const row = {
  display: 'flex',
};

const column = {
  flex: '50%',
  padding: '1rem',
};

const leftColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function ProfileView() {
  const user = useSelector(state => state.userReducer.user);

  const [fields, setFields] = useState([
    {
      name: ['firstName'],
      value: user.firstName,
    },
    {
      name: ['lastName'],
      value: user.lastName,
    },
    {
      name: ['patronymic'],
      value: user.patronymic,
    },
    {
      name: ['email'],
      value: user.email,
    },
  ]);

  const birthDate = moment(user.birthDate).format('Do MMMM YYYY');
  const dateJoined = moment(user.dateJoined).format('Do MMMM YYYY');

  return (
    <div style={pageWrapper}>
      <div style={cardWrapper}>
        <h1>Profile page</h1>

        <div style={row}>

          <div style={{...column, ...leftColumn}}>
            <Avatar size={192} src={user.avatarUrl}/>

            <div style={{textAlign: 'center'}}>
              <Button
                type="dashed"
                style={{margin: '1rem 0'}}
                icon={<PlusOutlined />}
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
              <Button type="primary">Log out</Button>
              <Button type="link">Log out from all devices</Button>
            </div>
          </div>

          <div style={column}>
            <ProfileFormComponent
              fields={fields}
              onChange={(newFields) => {
                setFields(newFields);
              }}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileView;
