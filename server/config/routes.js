let path = require('path');
let pets = require('./../controllers/pets'); // controller require


module.exports = function(app){
    app.get('/pets', pets.index);
    app.get('/pets/:id', pets.show);
    app.post('/pets/new', pets.create);
    app.put('/pets/:id/edit', pets.update);
    app.delete('/pets/:id', pets.destroy);
     // passing in controller methods that take req and res can be done this way
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
};