//server.js.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//Dades del CV.
const profile = {
    nom: 'Laura Limones Fusté',
    email: 'lauralimonesfuste@gmail.com',
    gitHub: 'https://github.com/Llzzww7',
    linkedIn:'https://www.linkedin.com/in/laura-limones-468b37362',
};

//Servir fitxers estàtics de la carpeta public.
app.use(express.static(path.join(__dirname, 'public')));
//express.static() => middleware que serveix fitzers estàtics des d'una carpeta. 
//path.join() => construeix el camí absolut a la carpeta public del projecte.

//API pública per obtenir el perfil.
app.get('/api/profile', (req, res) => {
    res.json(profile);
});

app.listen(PORT, ()=> {
    console.log(`Servidor actiu en http://localhost:${PORT}`);
});



