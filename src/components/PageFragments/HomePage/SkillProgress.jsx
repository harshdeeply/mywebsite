import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={88} text="Javascript" />
        <ProgressBar percent={85} text="ReactJS" />
        <ProgressBar percent={78} text="Gatsby" />
        <ProgressBar percent={90} text="NodeJS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={85} text="Python" />
        <ProgressBar percent={90} text="Mysql" />
        <ProgressBar percent={82} text="MongoDB" />
        <ProgressBar percent={85} text="Wordpress" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
