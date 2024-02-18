import reyes from '../../public/imgs/listReyes.json';
import { Card, Row } from 'react-bootstrap';

export const Cards = () => {
    function capitalize(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  return (
    <>
    <h1 className='text-center text-light'>Reyes</h1>
      <Row className='g-4' xs={1} md={2}>
            {reyes.map((rey, index) => {
                // Importar la imagen
                return (
                <div className="col-md-4" key={index}>
                <Card bg={'warning'} border="primary"className='pt-3 shadow-2'>
                <Card.Img variant="top" src={`/imgs/reyes/${rey.img}`} />
                    <Card.Body>
                    <Card.Title className='text-center'>{capitalize(rey.nombre)}</Card.Title>
                    {/* <Card.Text>
                        {rey.reinado}
                    </Card.Text> */}
                    </Card.Body>
                </Card>
                </div>
            )
        })}
    </Row>
        </>
    )
}