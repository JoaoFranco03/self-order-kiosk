const data = {
    categories: [
      { name: 'Beverages', image: '/images/beverages.png' },
      { name: 'Breakfast', image: '/images/breakfast.png' },
      { name: 'Burgers', image: '/images/burgers.png' },
    ],
    products: [
      {
        category: 'Beverages',
        name: 'Coca-Cola',
        calorie: 120,
        price: 1,
        image: '/images/t-mcdonalds-Coca-Cola-Classic-Small.png',
        disabledImage: '/images/t-mcdonalds-Coca-Cola-Classic-Small-disabled.png',
        initialStock: 25,
        stock: 2,
      },
      {
        category: 'Beverages',
        name: 'Vanilla Shake',
        price: 1.5,
        calorie: 360,
        image: '/images/t-mcdonalds-Vanilla-McCafe-Shake-Medium.png',
        disabledImage: '/images/t-mcdonalds-Vanilla-McCafe-Shake-Medium-disabled.png',
        initialStock: 55,
        stock: 55,
      },
      {
        category: 'Beverages',
        name: 'Hot Chocolate',
        price: 2,
        calorie: 170,
        image: '/images/t-mcdonalds-McCafe-Hot-Chocolate-Medium.png',
        disabledImage: '/images/t-mcdonalds-McCafe-Hot-Chocolate-Medium-disabled.png',
        initialStock: 1,
        stock: 0,
      },
      {
        category: 'Breakfast',
        name: 'Bacon & Biscuit',
        price: 1.9,
        calorie: 90,
        image:'/images/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit.png',
        disabledImage:'/images/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-disabled.png',
        initialStock: 5,
        stock: 5,
      },
      {
        category: 'Breakfast',
        name: 'Blueberry Muffin',
        price: 1.5,
        calorie: 120,
        image: '/images/t-blueberry-muffin.png',
        disabledImage: '/images/t-blueberry-muffin-disabled.png',
        initialStock: 120,
        stock: 120,
      },
      {
        category: 'Breakfast',
        name: 'Big Breakfast',
        price: 3,
        calorie: 430,
        image: '/images/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit.png',
        disabledImage: '/images/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit-disabled.png',
        initialStock: 55,
        stock: 55,
      },
      {
        category: 'Burgers',
        name: 'Big Mac',
        price: 1.9,
        calorie: 200,
        image: '/images/t-mcdonalds-Big-Mac.png',
        disabledImage: '/images/t-mcdonalds-Big-Mac-disabled.png',
        initialStock: 450,
        stock: 450,
      },
      {
        category: 'Burgers',
        name: 'Hamburger',
        price: 1.5,
        calorie: 410,
        image: '/images/t-mcdonalds-Hamburger.png',
        disabledImage: '/images/t-mcdonalds-Hamburger-disabled.png',
        initialStock: 67,
        stock: 67,
      },
      {
        category: 'Burgers',
        name: 'McDouble',
        price: 3,
        calorie: 320,
        image: '/images/t-mcdonalds-McDouble.png',
        disabledImage: '/images/t-mcdonalds-McDouble-disabled.png',
        initialStock: 2,
        stock: 2,
      },
    ],
  };
  module.exports = data;