var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Cliente.findAll({ 
  })
  .then(Cliente => {
     res.send(Cliente)
  })
  .catch(error => res.status(400).send(error))
});

router.get('/:id', function(req, res, next) {
  models.Cliente.findAll({ 
    where: {idCliente: (req.params).id}
  })
  .then(Cliente => {
     res.send(Cliente[0])
  })
  .catch(error => res.status(400).send(error))
});

/* PUT clientes */
router.put('/:id', (req, res, next) => {
    try{
        let response = models.Cliente.update(req.body, {
            where:{
                idCliente:(req.params).id
            }
        })
        res.status(200).send('Cliente actualizado'); 
    }catch(error){
        res.status(400).send('No se pudo actualizar la informacion del cliente')
    }
});

/* POST clientes */
router.post('/', (req, res, next) => {
    try{
        let cliente = models.Cliente.create(req.body);
        res.status(200).send('Cliente creado');    
    }catch(error ) {
            res.status(400).send('No se pudo crear el cliente')
            console.log(error)
    }
});

/* DELETE clientes */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    try{
        models.Cliente.destroy({
            where: {
                idCliente:id
            }
        });
        res.status(200).send('Cliente eliminado')
    }catch(error) { res.status(400).send('No se pudo eliminar el cliente')}
});
module.exports = router;
