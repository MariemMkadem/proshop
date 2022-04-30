import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';

const Fooer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3' >
          Copyright  &copy; Proshop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Fooer