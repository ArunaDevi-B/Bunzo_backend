const category = require('../Data/category.data');
const items = require('../Data/item.data');
const shopData = require('../Data/store.data');
const cartItems = require('../Data/cart.data')

class UserService {

    async createShop(shopName) {
        try{
            const store = await new shopData(shopName).save();
            return;
        } catch (error) {
            console.log('error in createShop', error);
        }
    };

    async addCategory(categoryName) {
        try {
            const catogory = await new category(categoryName).save();
            return;
        } catch (error) {
            console.log('error in addCategory', error);
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

    async addItem(itemName) {
        try {
            console.log(itemName);
            const item = await new items(itemName).save();
            return;
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