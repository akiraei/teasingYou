import { Layout } from 'antd';
import React from 'react'
import Cardy from './cardy'
import { Row, Col } from 'antd';
import Headery from "./header"
import Face from "./face"

const { Header, Footer, Sider, Content } = Layout;



class Container extends React.Component {



    render() {


return (


<div>
  <Layout>
    <Header className="headery">Voronoi</Header>
    <Content>


    <Row className="row" type="flex" gutter={16} justify="center">
      <Face/>
    </Row>



    <Row className="row" type="flex" gutter={16} justify="space-around">
{
  [0,1,2].map((e, i) => 
  <Col className="gutter-row" key={i}>
  <Cardy key={i}/>
</Col>
  )
}
   </Row>
   <Row className="row" type="flex" gutter={16} justify="space-around">
{
  [0,1,2].map((e, i) => 
  <Col className="gutter-row" key={i}>
  <Cardy key={i}/>
</Col>
  )
}
   </Row>

    </Content>
    <Footer className="footer">Copyrightⓒ Voronoi All Rights reserved.</Footer>
  </Layout>
</div>



    );
  }
}

export default Container

