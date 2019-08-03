let express = require('express');
const PORT = 80;
let app = express();
app.listen(PORT, function() {
    console.log("Mi servidor http escuchando en el puerto " + PORT + "...");
});
app.get('/foo', function(req, res) {
    console.log('Hola, soy foo.');
});