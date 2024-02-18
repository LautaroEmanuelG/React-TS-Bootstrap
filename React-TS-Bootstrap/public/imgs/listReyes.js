//Script que recorre la carpeta reyes para generara un json con cada y rey y su nombre
import { promises as fs } from 'fs';

const directoryPath = "c:/Users/Lautaro/OneDrive/Documentos/WorkSpace/Codigo Facilito/React-TS-Bootstrap/React-TS-Bootstrap/src/assets/imgs/reyes";

let listReyes = [];

fs.readdir(directoryPath)
  .then(files => {
    files.forEach(file => {
      console.log(file.substring(4, file.length - 4));

      let nombre = file.substring(4, file.length - 4);
      listReyes.push({ nombre: nombre, img: file });
    });
    fs.writeFile('c:/Users/Lautaro/OneDrive/Documentos/WorkSpace/Codigo Facilito/React-TS-Bootstrap/React-TS-Bootstrap/src/assets/imgs/listReyes.json', JSON.stringify(listReyes), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    console.log("Lista de Reyes" + listReyes)
  })
  .catch(err => {
    console.log('Unable to scan directory: ' + err);
  });