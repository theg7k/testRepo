var express = require('express');
var router = express.Router();

//Login page

router.get('/login', (req, res) => res.render('login'));


//Register page

router.get('/register', (req, res) => res.render('register'));


//Register Handle
router.post('/register', (req, res) =>  {
    const {name, email, password, password2} = req.body;
    let errors = [];

    // Check the required fields

    if(!name, !email, !password, !password2) {
        errors.push({msg: "Please fill the required fields."});
    }

    //Check  password match

    if(password !== password2 ) {
        errors.push({msg: "Passwords don not match."});
    }

    //Check pass length

    if(password.length < 6) {
        errors.push({msg: "password should be at least 6 characters long."});
    }

    if(errors.length > 0 ) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }
        else{
            res.send('pass');
        }
    })

module.exports = router;
