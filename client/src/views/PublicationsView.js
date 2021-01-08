import React, { useState, useEffect } from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import NewPublicationDrawerComponent from "../components/publication/NewPublicationDrawerComponent";
import {useDispatch, useSelector} from 'react-redux';
import {getPublications} from '../actions/publicationActions';
import PublicationCardComponent from "../components/publication/PublicationCardComponent";

const pageWrapper = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const titleCardWrapper = {
  width: '64rem',
  backgroundColor: '#fafafa',
  display: 'flex',
  justifyContent: 'space-between',
};

function PublicationsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getPublications()), [dispatch]);

  const publications = useSelector(state => state.publicationReducer.publications);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={pageWrapper}>
      <div style={titleCardWrapper}>
        <h1>News page</h1>
        <Button
          type="dashed"
          style={{margin: '1rem 0'}}
          icon={<PlusOutlined/>}
          onClick={showDrawer}
        >
          Create publication
        </Button>
        <NewPublicationDrawerComponent
          onClose={onClose}
          visible={visible}
        />
      </div>

      {
        publications.map((p, i) => <PublicationCardComponent {...p} key={i}/>)
      }

    </div>
  );
}

export default PublicationsView;
