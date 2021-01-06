import React from 'react';
import {Image} from 'antd';
import {FieldTimeOutlined} from '@ant-design/icons';

const pageWrapper = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const titleCardWrapper = {
  width: '64rem',
  backgroundColor: '#fafafa',
};

const contentCardWrapper = {
  width: '64rem',
  border: '1px solid rgba(0,0,0,0.15)',
  borderRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
};

const contentCardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

function NewsView() {
  return (
    <div style={pageWrapper}>
      <div style={titleCardWrapper}>
        <h1>News page</h1>
      </div>

      <div style={contentCardWrapper}>
        <div style={contentCardHeader}>
          <h2>Some news title</h2>
          <span style={{fontSize: '1rem'}}>
            <FieldTimeOutlined style={{marginRight: '0.5rem'}}/>
            28.09.2021
          </span>
        </div>

        <Image
          width={990}
          height={450}
          preview={false}
          src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder2-web_06b2d8d686e91925353ddf153da5d939.webp"
        />

        <div style={{marginTop: '1rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor dui at auctor hendrerit. Aenean molestie maximus metus non varius. Sed semper neque ac sapien tempor maximus. Nam nec tellus et lacus pulvinar convallis quis quis neque. Morbi finibus mi non turpis rhoncus, quis lacinia orci molestie. Mauris sapien est, mollis lobortis felis quis, blandit lacinia massa. Nullam ultricies euismod tincidunt. Suspendisse dignissim volutpat nunc vitae fermentum. Cras commodo ultrices elit aliquet semper. Donec condimentum laoreet erat id convallis. Suspendisse blandit varius scelerisque.
        </div>
      </div>
    </div>
  );
}

export default NewsView;
