import React from "react";
import { Card, Divider } from 'antd';
import { Link } from "react-router-dom";
const { Meta } = Card;



export default function AppHeader(props) {
  const { program } = props;
  return (
    <Card
      hoverable
      style={{ width: '90%', padding: '15px', backgroundColor: '#fff', borderRadius: '10px', margin: '10px', textAlign: 'left', height: 'auto'}}
      cover={<img alt="example" src={program.image.src} />}
    >
      <Meta title={program.name} description={program.description} />
      <Divider/>
      <Link to={program.program}>
        Learn More!
      </Link>
    </Card>
  );
}
