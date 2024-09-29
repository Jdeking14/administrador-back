const { registerUser, createToken } = require('@services/authService');
const { getUserWithId } = require('@services/userService');
const bcrypt = require("bcrypt");

const createUser = async(req, res) =>{
    try{
        const user = await registerUser(req.body);
        const token = createToken(user);

        res.status(201).json({ jwt: token });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const login = async (req, res) => {
    try{
        //Obtengo el usuario a traves de su e-mail
        const user = await getUserWithEmail(req.body.email);
        if(!user){
            res.status(404).json({error: 'User does not exist'});
        }
        //Compruebo si la contraseña coincide con bcrypt
        if(user.password){
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if(isPasswordValid){
                //Si coincide generamos el jwt y lo envíamos
                const token = createToken(user);
                res.status(200).json({message: 'Login successful', jwt: token});
            }else{
                res.status(401).json({error: 'Invalid password'});
            }
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const loginbyId = async (req, res) => {
    try{
        //Obtengo el usuario a traves de su e-mail
        const user = await getUserWithId(req.params.id);
        if(!user){
            res.status(404).json({error: 'User does not exist'});
        }else{
                const token = createToken(user);
                res.status(200).json({message: 'Login successful', jwt: token});
        }
        
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = { createUser, login, loginbyId };