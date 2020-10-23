import products from './datasource/products';

export default {
    reducers: {
        products: products.reducer,
    },
    actions: {
        LIST_HOME_PRODUCTS: products.actions.LIST_HOME_PRODUCTS,
    },
};
