import React, { Component } from 'react'
import {Row, Col, Button, Popover} from 'antd'
import './index.css'


class Donate extends Component {
  render() {
    return (
      <div className="donate">
        <Popover content={content} title="感谢您的支持！ Thanks for your support!" placement="topRight">
          <Button type="danger" icon="red-envelope" ghost>捐赠 Donate</Button>
        </Popover>
      </div>
    )
  }
}

const content = (
  <div className="donate-content">
    <Row>
      <Col span={8}>
        <p> <img src="/image/paypal.png" alt="paypal QRCode" /> </p>
        <p> <a href="https://www.paypal.me/sjfkai" target="_blank"  rel="noopener noreferrer">Pay for me</a> </p>
      </Col>
      <Col span={8}>
        <img src="/image/code.jpg" alt="wechat QRCode" />
      </Col>
      <Col span={8}>
        <p> <img src="/image/alipay.jpeg" alt="alipay QRCode" /> </p>
        <p> 打开支付宝[扫一扫] </p>
      </Col>
    </Row>
  </div>
);

export default Donate
