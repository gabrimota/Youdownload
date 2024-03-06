import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import style from "../background/style.module.scss";

export function BackGround() {
    return (
        
      <Row>
      <Col className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div>
        <img
          src="LogoBackBoa2.png"
          alt="BackGround"
          className="img-fluid"
          style={{
            maxHeight: '100%',
            maxWidth: '100%', 
            
          }}
        />
        </div>
      </Col>
    </Row>
      
    );
}
