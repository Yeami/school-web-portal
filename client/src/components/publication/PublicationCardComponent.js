import React from 'react';
import {FieldTimeOutlined} from '@ant-design/icons';
import {Image} from 'antd';
import moment from 'moment';

const PublicationCardComponent = (publication) => {
  const contentCardWrapper = {
    width: '64rem',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: '0.5rem',
    padding: '1rem',
    backgroundColor: '#fff',
    marginBottom: '1rem',
  };

  const contentCardHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const createdAt = moment(publication.createdAt).format('Do MMMM YYYY');
  const author = ` ${publication.author.firstName} ${publication.author.lastName}`;

  return (
    <div style={contentCardWrapper}>
      <div style={contentCardHeader}>
        <h2>{publication.title}</h2>
        <span style={{fontSize: '1rem'}}>
            <FieldTimeOutlined style={{marginRight: '0.5rem'}}/>
            {createdAt}
          </span>
      </div>

      <Image
        width={990}
        height={450}
        preview={false}
        src={publication.imageUrl}
      />

      <div style={{marginTop: '1rem'}}>
        {publication.content}
      </div>

      <div style={{marginTop: '1rem'}}>
        Author:
        <span>
          <b>
            {author}
          </b>
        </span>
      </div>
    </div>
  )
};

export default PublicationCardComponent;
