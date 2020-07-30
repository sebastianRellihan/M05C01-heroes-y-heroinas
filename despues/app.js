// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Routes
const mainRoutes = require('./routes/main');
const heroesRoutes = require('./routes/heroes');
const creditosRoutes = require('./routes/creditos');
const notFoundRoutes = require('./routes/notFound');
// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Ruta Raíz / ➝ Home
app.use('/', mainRoutes);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes', heroesRoutes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.use('/heroes/:id/profesion', heroesRoutes);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.use('/heroes/:id/resenia/:tipo?', heroesRoutes);

// Ruta Créditos
app.use('/creditos', creditosRoutes);

// Ruta... ¿Pára qué sirve esto?
app.use('*', notFoundRoutes);