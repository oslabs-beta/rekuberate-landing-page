const User = require('../models/userModel.js');
const userController = {};


userController.createUser = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next({
            log: 'Error occurred in userController.createUser',
            status: 400,
            message: { err: 'An error occurred' }
        });
    }
    try {
        console.log(username , password)
        res.locals.user = req.body;
        const user = await User.create({ username, password });
        res.locals.true = true;
        return next();
    } catch (err) {
        return next({
            log: 'Error occurred in userController.createUser',
            status: 400,
            message: { err: 'An error occurred' },
        });
    }
};

userController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body)
    if (!username || !password) {
        return next({
            log: 'Error occurred in userController.verifyUser',
            status: 400,
            message: { err: 'An error occurred in entering username/password in verifyUser' }
        });
    }
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return ext({
                log: 'Error occurred in userController.verifyUser',
                status: 400,
                message: { err: 'An error occurred, cannot find user' }
            });
        }
        else{
            res.locals.boolean = true;
            return next();
        }  
    } catch (err) {
        return next({
            log: 'Error occurred in userController.verifyUser',
            status: 400,
            message: { err: 'An error occurred' },
        });
    }
};



module.exports = userController;