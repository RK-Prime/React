

const userController = require('../Controller/user.controller.js');

module.exports = (app)=>{
    
    // POST Operation for registering User to Databse.
    app.post('/api/userRegister', userController.register);

    // POST Operation for Login in the User
    app.post('/api/userLogin', userController.login);

    // POST Operation for user information
    app.post('/api/userInfo', userController.showUser);

    // GET Operation for all user Information
    app.get('/api/UsersInfo', userController.showAll);
};