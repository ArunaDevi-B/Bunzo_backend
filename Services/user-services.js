const category = require('../Data/category.data');
const items = require('../Data/item.data');
const shopData = require('../Data/store.data');
const cartItems = require('../Data/cart.data')
const registration = require('../Data/registration');
const bcrypt = require('bcrypt');


class UserService {
    async registerUser(userData) {
        try {
            if(userData.firstName === "" || userData.emailId === "" || userData.password === "" ){
                console.log('Enter valid FirstName, EmailID and Password');
                return false;
            }
            const hashedPassword = await bcrypt.hash(userData.password, 5);
            userData.password = hashedPassword;
            const register = await new registration(userData).save();
            return;
        } catch (error) {
            console.log('error in registerUser', error);
        }
    };

    async loginUser(userData) {
        try {
            const loginList = await registration.find({emailId: userData.emailId});
            console.log(loginList);
            const match = await bcrypt.compare(userData.password,loginList[0].password);
            console.log(match);
            if(userData.emailId !="" && match == true){
                console.log('its a match', loginList);

                return loginList;
            }
                console.log("Kindly enter the correct login details");
                return false;
            
        } catch (error) {
            console.log('error in loginUser', error);
        }
    }

    async getshops() {
        try{
            const storeList = await shopData.find();
            return storeList;
        } catch (error) {
            console.log('error in storeList', error);
        }
    };

    async getCategory() {
        try {
            const catogoryList = await category.find();
            return catogoryList;
        } catch (error) {
            console.log('error in catogoryList', error);
        }
    };

    async addToCart(cartItemName) {
        try {
            const cartItem = await new cartItems(cartItemName).save();
            return;
        } catch (error) {
            console.log('error in addToCart', error);
        }
    };

    async getItem(itemName) {
        try {
            console.log(itemName);
            const itemList = await items.find({itemType: itemName});
            return itemList;
        } catch (error) {
            console.log('error in routeaddItems', error)
        }
    }

    async updateData() {
        try {
            console.log('updating');
            const itemList = await items.updateMany({itemType: 'vegetables'},{itemType: 'Vegetables'} );
            return itemList;
        } catch (error) {
            console.log('error in routeaddItems', error)
        }
    }

    // async getUser() {
    //     try {
    //         const userList = await usersData.find({});
    //         return userList;
    //     } catch (error) {
    //         console.log('error in getUser', error);
    //     }
    // }
}

module.exports = new UserService();