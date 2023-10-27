export default {
    state:{
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                description: 'Introducing the ultimate fusion of style and performance - Nike Sneakers! These iconic shoes redefine what it means to be a trendsetter while delivering unparalleled comfort and functionality. Crafted with precision and innovation, Nike Sneakers are a testament to the brand\'s commitment to excellence.',
                img: require('../assets/shop-img/1.png'),
                gallery: [
                    {
                        name: 'Nike boots First',
                        img: require('../assets/shop-img/1.png'),
                    },
                    {
                        name: 'Nike boots second',
                        img: require('../assets/shop-img/2.png'),
                    },
                    {
                        name: 'Nike boots third',
                        img: require('../assets/shop-img/3.png'),
                    },
                ]
            },
            {
                id: 2,
                title: 'Nike default',
                description: 'Introducing the ultimate fusion of style and performance - Nike Sneakers! These iconic shoes redefine what it means to be a trendsetter while delivering unparalleled comfort and functionality. Crafted with precision and innovation, Nike Sneakers are a testament to the brand\'s commitment to excellence.',
                img: require('../assets/shop-img/4.png'),
                gallery: [
                    {
                        name: 'Nike boots First',
                        img: require('../assets/shop-img/4.png'),
                    },
                    {
                        name: 'Nike boots second',
                        img: require('../assets/shop-img/5.png'),
                    },
                    {
                        name: 'Nike boots third',
                        img: require('../assets/shop-img/6.png'),
                    },
                ]
            },

            {
                id: 3,
                title: 'Nike street',
                description: 'Introducing the ultimate fusion of style and performance - Nike Sneakers! These iconic shoes redefine what it means to be a trendsetter while delivering unparalleled comfort and functionality. Crafted with precision and innovation, Nike Sneakers are a testament to the brand\'s commitment to excellence.',
                img: require('../assets/shop-img/7.png'),
                gallery: [
                    {
                        name: 'Nike boots First',
                        img: require('../assets/shop-img/7.png'),
                    },
                    {
                        name: 'Nike boots second',
                        img: require('../assets/shop-img/8.png'),
                    },
                    {
                        name: 'Nike boots third',
                        img: require('../assets/shop-img/9.png'),
                    },
                ]
            },
            {
                id: 4,
                title: 'Nike white',
                description: 'Introducing the ultimate fusion of style and performance - Nike Sneakers! These iconic shoes redefine what it means to be a trendsetter while delivering unparalleled comfort and functionality. Crafted with precision and innovation, Nike Sneakers are a testament to the brand\'s commitment to excellence.',
                img: require('../assets/shop-img/10.png'),
                gallery: [
                    {
                        name: 'Nike boots First',
                        img: require('../assets/shop-img/10.png'),
                    },
                    {
                        name: 'Nike boots second',
                        img: require('../assets/shop-img/11.png'),
                    },
                    {
                        name: 'Nike boots third',
                        img: require('../assets/shop-img/12.png'),
                    },
                ]
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state){
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => String(product.id) === String(id))
        }
    }
}