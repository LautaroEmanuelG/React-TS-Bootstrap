import reyes from '../../public/imgs/listReyes.json';
import { Card, Row } from 'react-bootstrap';

export const Cards = () => {
    function capitalize(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const voltear = (e: React.MouseEvent<HTMLImageElement>,rey:string) => {
        //Casting de e.target a HTMLImageElement
        const target = e.target as HTMLImageElement;
        //Validar si la imagen es incognita o no
        if(target.src.includes('rey_incognito')){
            target.src=rey
            if (target.parentNode) {
                (target.parentNode as HTMLElement).className ='p-3 card bg-warning border-primary'
            }
        }else{
            target.src='/imgs/reyes/rey_incognito.png'
            //Validar si el padre existe
            if (target.parentNode) {
                //Casting de target.parentNode a HTMLElement
                (target.parentNode as HTMLElement).className ='p-3 card bg-danger border-primary'
            }
        }
    }
  return (
    <>
    <h1 className='text-center text-light'>Reyes</h1>
      <Row className='g-4' xs={1} md={2}>
        {reyes.map((rey, index) => {
            if (rey.nombre.includes('incognito')) {
                return null
            } else{
            // Importar la imagen
            return (
                    <div className="col-md-4" key={index}>
                        <Card bg={'warning'} border="primary" className='p-3 shadow-2'>
                            <Card.Img onClick={(e)=>voltear(e,`/imgs/reyes/${rey.img}`)} variant="top" src={`/imgs/reyes/${rey.img}`} />
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