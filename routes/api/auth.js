const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/',async (req,res) => {

    const {email,password} = req.body;

    try {
        let user = await User.findOne({email});

        if(!user) {
            res.status(400).json({errors:{msg:'Invalid Email or Password'}})
        }

        

        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

});

module.exports = router;