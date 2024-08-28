

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

    // POST operation for adding cart Items
    app.post('/api/cart/addItem', userController.cartAddItem);

    // GET operation for getting cart Iems
    app.post('/api/cart/getCartItem', userController.getCartItem);
};