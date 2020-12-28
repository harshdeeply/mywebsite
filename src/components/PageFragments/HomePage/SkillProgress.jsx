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
        <ProgressBar percent={86} text="React Native" />
        <ProgressBar percent={90} text="NodeJS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Python" />
        <ProgressBar percent={88} text="MySQL" />
        <ProgressBar percent={92} text="Angular" />
        <ProgressBar percent={88} text="TypeScript" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
