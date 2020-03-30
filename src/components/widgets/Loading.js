import React from 'react';
import logo from '../../assets/logoC.png'
import {Row, Col} from 'react-bootstrap'
import '../../css/loadingCSS.css'

const Loading = (props) => {
  return (
    <>
      <Row>
        <Col>
          <div align="center">
            <h1 style={{color: "white"}}>Carregando</h1>
            <img
                className="image"
                width={"42px"}
                src={logo}
                alt="PETLogo"
            />{' '}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Loading;