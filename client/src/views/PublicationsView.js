import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import NewPublicationDrawerComponent from "../components/publication/NewPublicationDrawerComponent";
import {useDispatch, useSelector} from 'react-redux';
import {getPublications} from '../store/actions/publicationActions';
import PublicationCardComponent from '../components/publication/PublicationCardComponent';
import {pageWrapper, titleCardWrapper} from '../utils/styles';

function PublicationsView(props) {
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
        {
          props.isAuth ?
            <Button
              type="dashed"
              style={{margin: '1rem 0'}}
              icon={<PlusOutlined/>}
              onClick={showDrawer}
            >
              Create publication
            </Button>
            : null
        }
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
