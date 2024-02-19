import { Alert, Row } from 'react-bootstrap';
import reyes from '../../public/imgs/listReyes.json';
import { ReyCard } from './ReyCard';
import { useState } from 'react';
export const Cards = () => {
	const [años, setAños] = useState(0);
	return (
		<>
			<h1 className="text-center text-light">Reyes</h1>
			<Alert
				key="alert"
				variant="primary">
				Se agregaron {años} a los reynado
			</Alert>
			<Row className="g-4">
				{reyes.map((rey, index) => {
					if (rey.nombre.includes('incognito')) {
						return null;
					} else {
						return (
							<div
								className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
								key={index}>
								<ReyCard
									nombre={rey.nombre}
									img={rey.img}
									reynado={rey.reynado}
									descripcion={rey.descripcion}
									color={rey.color}
									setAños={setAños}
								/>
							</div>
						);
					}
				})}
			</Row>
		</>
	);
};
