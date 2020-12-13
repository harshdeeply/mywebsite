import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={92} text="Javascript" />
        <ProgressBar percent={90} text="ReactJS" />
        <ProgressBar percent={86} text="Gatsby" />
        <ProgressBar percent={90} text="NodeJS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Python" />
        <ProgressBar percent={88} text="Mysql" />
        <ProgressBar percent={92} text="MongoDB" />
        <ProgressBar percent={88} text="Wordpress" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
