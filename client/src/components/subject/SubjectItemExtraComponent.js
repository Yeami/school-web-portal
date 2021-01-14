import {CloseOutlined, EditOutlined} from '@ant-design/icons';

function SubjectItemExtraComponent({subject, editClick, removeClick}) {
  return (
    <div>
      <EditOutlined
        style={{marginRight: '1rem'}}
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
          editClick(subject);
        }}
      />
      <CloseOutlined
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
          removeClick(subject);
        }}
      />
    </div>
  )
}

export default SubjectItemExtraComponent;