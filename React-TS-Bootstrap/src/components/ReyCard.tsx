import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface ReyCardProps {
	nombre: string;
	img: string;
	reynado: string;
	descripcion: string;
	color: string;
	setAños: number | any;
}

export const ReyCard = ({
	nombre,
	img,
	reynado,
	descripcion,
	color,
	setAños,
}: ReyCardProps) => {
	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	const calcularReynado = () => {
		let inicio = reynado.slice(0, 3);
		let fin = reynado.slice(4, 7);
		let años = Number(fin) - Number(inicio);
		return años;
	};
	const sumar = (elemento: any) => {
		const añosReynado = calcularReynado();
		setAños((e: number) => e + añosReynado);
		elemento.target.parentNode.parentNode.parentNode.style.display = 'none';
	};
	return (
		<Card
			bg={color}
			border="primary"
			className="col-12 p-1 justify-content-between text-center h-100 w-100">
			<Card.Header className="mb-2 text-center">
				{capitalize(nombre)}
			</Card.Header>
			<Card.Img
				style={{ height: '200px', objectFit: 'contain' }}
				variant="top"
				src={`/imgs/reyes/${img}`}
			/>
			<Card.Body className="d-flex flex-column justify-content-between">
				<Card.Text className="text-start">{descripcion}</Card.Text>
				<Card.Text className="col-12 bg-dark bg-opacity-50 border border-dark border-2 rounded text-light">
					{reynado}
				</Card.Text>
				<Button
					variant="danger"
					className="col-12 border"
					onClick={sumar}>
					Elegir
				</Button>
			</Card.Body>
		</Card>
	);
};
