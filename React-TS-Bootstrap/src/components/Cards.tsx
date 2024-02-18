import reyes from '../../public/imgs/listReyes.json';
import { Card, Row } from 'react-bootstrap';

export const Cards = () => {
    // const cardClick = useRef();
    function capitalize(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const voltear = (e:any) => {
        console.log(e);
        
            e.target.src='/imgs/reyes/rey_incognito.png'
        e.target.parentNode.className ='p-3 shadow-2 card bg-danger border-primary'
    }
  return (
    <>
    <h1 className='text-center text-light'>Reyes</h1>
      <Row className='g-4' xs={1} md={2}>
            {reyes.map((rey, index) => {
                if (rey.nombre == 'rey_incognito') {
                    return null}
                else{
                // Importar la imagen
                return (
                    <div className="col-md-4" key={index}>
                        <Card bg={'warning'} border="primary" className='p-3 shadow-2'>
                            <Card.Img onClick={voltear} variant="top" src={`/imgs/reyes/${rey.img}`} />
                                <Card.Title className='text-center'>{capitalize(rey.nombre)}</Card.Title>
                                <Card.Text className='text-center'>
                                    {rey.reynado}
                                </Card.Text>
                        </Card>
                    </div>
                )}
        })}
    </Row>
        </>
    )
}