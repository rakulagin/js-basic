"use strict"

//задание 1
console.log("задание 1")

for (let i=0; i < 11; i++) {
    if (i == 0) {
        console.log(i + " это ноль");
    }
    else if (i % 2 == 0) {
        console.log(i + " это четное число");
    } else {
        console.log(i + " это НЕчетное число");
    }
    // 
}

//задание 2
console.log("задание 2")

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//задание 3
console.log("задание 3")

const products3 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function sale(productPrice) {
    productPrice.price = productPrice.price * 0.85;
}
products3.forEach(sale)

// то же самое но через цикл

// for (let i = 0; i < products3.length; i++) {
//     products3[i].price = products3[i].price * 0.85;
// }
console.log(products3);

//задание 4
console.log("задание 4")

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg", 
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let filterPhoto = products.filter(function(photo) {
    return ("photos" in photo && photo.photos.length > 0)
});
console.log(filterPhoto);

products.sort(function (price1, price2) {
    if (price1.price > price2.price) {
        return 1;
    }
    if (price1.price < price2.price) {
        return -1;
    }
    return 0
});
console.log(products);

// задание 6
console.log("задание 6")

let result = "x";
for (let i = 0; i < 20; i++) {
    console.log(result)
    result += "x";
    
}