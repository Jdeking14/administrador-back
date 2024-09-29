
const router = require("express").Router();
const { createUser, login, loginbyId } = require("@controllers/authController");

//Registra/crea el usuario
router.post('/register', createUser);

//Devuelve el jwt del usuario
router.post('/login', login);

//Obtiene el usuario por su id para hacer login
router.get('/:id', loginbyId);


module.exports = router;
