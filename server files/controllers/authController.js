const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const{username, password, email} = req.body;
        const db = req.app.get('db')
        
        let user = await db.auth.login(username);
        if(user[0]){
            return res.status(400).send('User Already Exists');

        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.auth.register(username, hash, email);
        
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);

    },

    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let user = await db.auth.login(username);
        if(!user[0]){
            return res.status(400).send('Username not found');

        }
        let authenticated = bcrypt.compareSync(password, user[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect, try again')
        }
        delete user[0].password;
        req.session.user = user[0];
        res.status(202).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },
    getUSer: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);

        }else{
            res.status(200).sed('no user on session')
        }
    }
}