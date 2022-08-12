import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import Eitan from './app/img/Eitans-portfolio-page-picture.png';
import { Container, Row, Col } from 'reactstrap';
import vaporwaveTrees from './app/img/vaporwaveTrees.png';

const App = () => {
  return (
    <div>
          <h1>Hi I'm Eitan Fire</h1>
        <Container>
          <Row>
            <Col>
            <img src={Eitan} alt='Eitans profile picture' />            
            </Col>
            <img class="col-sm-3 d-none d-lg-block" src={vaporwaveTrees} alt='Vaporwave Trees' />
            <Col>
            <h2>I am a school teacher who is interested in social justice and the role of science and technology in the classroom.</h2>            </Col>
            </Row>
          </Container>
      <div className="accordion" >
        {accordionData.map(({ title, content, image }) => (
          <Accordion title={title} content={content} image={image} />
         
        ))}
  
      </div>

      <i className="fa fa-envelope-o" href="mailto:eitanfire@gmail.com"> Get in Touch</i>
    </div>
  );
};

export default App;