var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mystore', {useNewUrlParser: true})
        .then(() => {
 
                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
        })
        .catch(err => console.log(err));
        // Si no se conecta correctamente escupimos el error
        