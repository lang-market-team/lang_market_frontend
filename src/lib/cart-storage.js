
class CartStorage {

    static get() {
        var json = localStorage.getItem('p-cart');
        return JSON.parse(json);
    }

    static add(data) {
        var list = CartStorage.get();
        if (!list) {
            list = [];
        }
        const itemIndex = list.findIndex(item => item.id_product === data.id_product);
        if (itemIndex !== -1) {
            list[itemIndex] = data;
        }
        else {
            list.push(data);
        }

        var json = JSON.stringify(list);
        console.log(list);
        localStorage.setItem('p-cart', json);
    }

    static update(data) {
        var list = CartStorage.get();
        const itemIndex = list.findIndex(item => item.id_product === data.id_product);
        list[itemIndex] = data;
        var json = JSON.stringify(list);
        localStorage.setItem('p-cart', json);
    }

    static delete(id) {
        var list = CartStorage.get();
        list = list.filter(_ => _.id_product !== id);
        var json = JSON.stringify(list);
        localStorage.setItem('p-cart', json);
    }

    static clear() {
        localStorage.removeItem('p-cart');
    }
}

export default CartStorage;