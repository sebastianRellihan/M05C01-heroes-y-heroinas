const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.send(heroes);
    },
    profesion: (req,res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id;
        let heroe = heroes[id-1];
        // Si se encuentra al héroe se envía el nombre y su profesión
        // Si NO se encuentra se envía el mensaje de no encontrado
        if (heroe === undefined){
            res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');
        } else{
            res.send('Mi nombre es ' + heroe.nombre + ' y mi profesion es ' +  heroe.profesion);
        }	
    },
    resenia: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id;
        let tipo = req.params.tipo;
        let heroe = heroes[id-1];
        // Si NO se encuentra al héroe se envía un mensaje
        if (heroe == undefined) {
            res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');
        }
        // Si se encuentra al héroe:
            // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
            else if (tipo != 'tipo' || tipo == undefined) {
                let resenia = heroe.resenia.split(' ').slice(0,30).join(' ');
                res.send(heroe.nombre + ': <br>' + resenia + '.....');
            }
            // Si nó vino el parámetro se envía el mensaje de error
            else {
                res.send(heroe.nombre + ': <br>' + heroe.resenia);
            }
    }
}