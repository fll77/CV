//server.js.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//Dades del CV.
const profile = {
    nom: 'Laura Limones Fusté',
    email: 'lauralimonesfuste@gmail.com',
    gitHub: 'https://github.com/fll77',
    linkedIn:'https://www.linkedin.com/in/laura-limones-468b37362',
};


app.use(express.static(__dirname));
//express.static() => middleware que serveix fitzers estàtics des d'una carpeta. 

//API pública per obtenir el perfil.
app.get('/api/profile', (req, res) => {
    res.json(profile);
});

app.listen(PORT, ()=> {
    console.log(`Servidor actiu en http://localhost:${PORT}`);
});



