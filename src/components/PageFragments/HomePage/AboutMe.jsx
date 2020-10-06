import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

import SEO from "../../Seo"

const pageText = {
  paraOne: `Hi! My name is Harshdeep Singh. I'm a front-end web developer who is passionate about various modern web technologies. I have an experience of nearly 2 years working with MERN stack and MEAN stack. Apart from that, I love doing photography and dancing with my crew!`,
  paraTwo: `So far, I have mostly worked with technologies such as ReactJS and NodeJS. I also
    have hands on experience working with python programming language. </br>My favorite quote is: <b>"Fall seven times, stand up eight."</b>`,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Harshdeep",
            "Singh",
            "Kairon",
            "Frontend developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and brought up in"
            textH3="Punjab, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="My routine"
            textH3="Coffee + Me = Productivity"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursuing diploma in"
            textH3="Computer Information Technology at BCIT"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe