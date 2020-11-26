const router = require('express').Router();
const bcrypt = require('bcrypt')
const { validateRegisterInput, validateLoginInput } = require('../utils/validators'); 
const { UserInputError, ReplaceFieldWithFragment } = require('apollo-server');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    let password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const {valid, errors} = validateRegisterInput(username, email, password, confirmPassword);
    if(!valid) {
        throw new Error(`Errors ${{errors}}`);
    }
    try {
        const user = await User.findOne({username});
        if(user) {
            return res.send('User name is taken')
        }
    
    

     password = await bcrypt.hash(password, 12);

    const newUser = new User({username, password, email});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    } catch(err) {
        throw new Error(`Error: ${err}`)
    }
});

router.route('/login').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const {valid, errors} = validateLoginInput(username, password);

    if(!valid) {
        throw Error(`Error: ${{errors}}`)
    }
    try {
        const user = await User.findOne({username})
        if(!user) {
            res.status(201).json('No user with that name');
        } else {
            const match = await bcrypt.compare(password, user.password);
            if(!match) {
                res.status(201).json('Wrong password')
            }else {
                res.send('User logged in');
            
            }
        }
    } catch(err) {
        throw new Error(err);
    }
});

module.exports = router;