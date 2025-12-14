const User = require('../config/schema');

exports.postUsers = async(req,res,next) => {
    try {
        const {firstName, lastName, email, contact, password, confPassword} = req.body;
        if(!firstName || !lastName || !email || !contact || !password || !confPassword) {
            return res.status(404).json({
                status: false,
                message: `Bad request`
            })
        }
        if(password !== confPassword) {
            return res.status(404).json({
                status: false,
                message: `Password and Confirm Password must be same`
            })
        }
        await User.create({firstName, lastName, email, contact, password});
        res.status(200).json({
            status: true,
            message: `User created Successfully`
        })
    }
    catch(err) {
        next(err);
    }
}

exports.searchUserByEmail = async(req,res,next) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(404).json({
                status:false,
                message: `Bad request`
            })
        }
        const data = await User.findOne({email, password});
        if(data) {
            return res.status(200).json({
                status: true,
                message: `Login Successful`,
                user:data
            })
        }
        else {
            return res.status(404).json({
                status: false,
                message:`No user found with this email`
            })
        }
    }
    catch(err) {
        next(err);        
    }
}