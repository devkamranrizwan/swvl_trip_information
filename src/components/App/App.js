import React from "react";
import { Layout, Row, Col } from "antd";
import MapContainer from "../Map";
import Avatar from "../Avatar";
import styles from "./App.module.scss";

function App() {
  return (
    <Layout className={`layout ${styles.app}`}>
      <Layout.Header>
        <h3 className="title">SWVL</h3>
      </Layout.Header>
      <Layout.Content>
        <Row className="map-container">
          <MapContainer />
        </Row>
        <Row className="info-container">
          <Col xs={24} md={20} offset={1}>
            <h3>Trip Information</h3>
            <p>15/5/2018 8:07 AM</p>
            <Row className="stats">
              <Col xs={24} className="avatars">
                <Row>
                  <Col flex="150px">
                    <Avatar name='driver' />
                    <Avatar name='bus' />
                  </Col>
                  <Col flex="auto">
                    <Row>
                      <Col xs={24} md={6}>
                        <h4>Herbert Patton</h4>
                        <p>Tyota Hiace GA-453</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} md={6}>
                    <h4 className="red-left-border">6th of October</h4>
                    <p className="red-left-border">Lorem Ipsum</p>
                  </Col>
                  <Col xs={24} md={6}>
                    <h4>6th of October</h4>
                    <p>Lorem Ipsum</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div>
              <h3>Bookings</h3>
            </div>
            <div className="bookings">
              <div className="user-card">
                <Row className="avatars">
                  <Col>
                    <Avatar />
                  </Col>
                  <Col xs={12} md={12}>
                    <h4>Adam Danisov</h4>
                    <p>418 Checked in</p>
                  </Col>
                </Row>
              </div>
              <div className="user-card">
                <Row className="avatars">
                  <Col>
                    <Avatar />
                  </Col>
                  <Col xs={12} md={12}>
                    <h4>Ilya Vasin</h4>
                    <p>594 Checked in</p>
                  </Col>
                </Row>
              </div>
              <div className="user-card">
                <Row className="avatars">
                  <Col>
                    <Avatar />
                  </Col>
                  <Col xs={12} md={12}>
                    <h4>Ingo Shimpff</h4>
                    <p>232 missed</p>
                  </Col>
                </Row>
              </div>
              <div className="user-card">
                <Row className="avatars">
                  <Col>
                    <Avatar />
                  </Col>
                  <Col xs={12} md={12}>
                    <h4>Igor Antonov</h4>
                    <p>232 Checked in</p>
                  </Col>
                </Row>
              </div>
              <div className="user-card">
                <Row className="avatars">
                  <Col>
                    <Avatar />
                  </Col>
                  <Col xs={12} md={12}>
                    <h4>Yeray Rosales</h4>
                    <p>232 Checked in</p>
                  </Col>
                </Row>
              </div>

            </div>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
