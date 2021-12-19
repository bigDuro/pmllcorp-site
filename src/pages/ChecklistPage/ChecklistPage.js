import React from 'react';
import { Divider, PageHeader, Typography, Button, Space, Row, Col, Checkbox } from 'antd';
import { checklist } from '../../constants'

const CheckboxGroup = Checkbox.Group;
const { Text } = Typography;
function ChecklistPage(props) {
  const [checked, setChecked] = React.useState(false);
  //
  const [checkedList, setCheckedList] = React.useState([]);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < checkedList.length);
    setCheckAll(list.length === checkedList.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? checkedList : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };


  return (
    <React.Fragment>
      <div className="site-layout-content">
        <Row>
          <Col xs={24}>
          <PageHeader
            className="site-page-header"
            title="Are you ready for a new home?"
            subTitle=""
          />
          {checklist.map((item, key) => {
            console.log(item)
            const list = item.list.reduce((list, item) => {
              list.push(item.item)
              return list
            }, [])
            return (
              <React.Fragment>
                <PageHeader
                  className="site-page-header"
                  title={item.heading}
                  subTitle=""
                />
                <CheckboxGroup options={list} value={checkedList} onChange={onChange} />
                <Divider />
              </React.Fragment>
            )

          })}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default ChecklistPage;
