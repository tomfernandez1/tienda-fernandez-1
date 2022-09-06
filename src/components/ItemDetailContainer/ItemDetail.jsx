import Button from 'react-bootstrap/Button';

import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export const ItemDetail = ({nombre, id, precio, imagen}) => {
  return (
    <MDBCard style={{ maxWidth: '540px', margin:"50px 0 0 30px" }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={imagen} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{nombre}</MDBCardTitle>
            <MDBCardText>
              <h3>${precio}</h3>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Actuializado hace 3 minutos</small>
              <Button variant="primary">Ver detalles del producto</Button>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
/*export const ItemDetail = ({nombre, id, precio, imagen}) => {
    return (
        <Card style={{ width: '18rem', margin:"50px 0 0 30px"}}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <h3>${precio}</h3>
          </Card.Text>
          
        </Card.Body>
      </Card>
    )
}*/

export default ItemDetail