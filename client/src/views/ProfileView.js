import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ProfileFormComponent from '../components/profile/ProfileFormComponent';
import ProfileGeneralInfoComponent from '../components/profile/ProfileGeneralInfoComponent';

import {logOutUser, logOutUserAllDevices, updateUserInfo} from '../store/actions/userActions';

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

function ProfileView() {
  const dispatch = useDispatch();
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

  const logOut = () => {
    dispatch(logOutUser());
  };

  const logOutAll = () => {
    dispatch(logOutUserAllDevices());
  };

  const updateInfo = (user) => {
    dispatch(updateUserInfo(user));
  };
  // TODO Photo uploading
  return (
    <div style={pageWrapper}>
      <div style={cardWrapper}>
        <h1>Profile page</h1>

        <div style={row}>

          <div style={column}>
            <ProfileGeneralInfoComponent
              user={user}
              logOut={logOut}
              logOutAll={logOutAll}
            />
          </div>

          <div style={column}>
            <ProfileFormComponent
              fields={fields}
              onChange={(newFields) => {
                setFields(newFields);
              }}
              onUpdate={updateInfo}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileView;
