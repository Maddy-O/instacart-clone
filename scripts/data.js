// For the images and its respective category
function returnCatgories(){
    let catgories = {
        "Grocery":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Grocery-circle@3x-753430eb5899d034e3d0b7a06e4112164cfb60ff8c0f8164c362d0466f106eff.png",
        "Convenience":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Convenience-circle@3x-f248b0c45d01c8ac06439d967082c84a077f4b4d4608f9601f2210f2a4eacdb0.png",
        "Alcohol":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Alcohol-circle@3x-6440aef793c995064612afb0713e1c2be5ff257cb16301b722ca40b1fa51b305.png",
        "In-store prices":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/InStorePricesReupload@3x-81cf88ccbd09c691bc330261b427e1d7870ffd09730e2dfceaf77d27802c8ba4.png",
        "EBT":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/EBT-circle@3x-84e45e294beca9cb5b9ea378b1d0903ca686246edad9d361c977d518169332ff.png",
        "Dollar store":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Discount-circle@3x-cd5809b2e67b9cc6deeb32cbf8dbdc5f6ae25f825f23c204e69b83906777a279.png",
        "Pets":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Pets-circle@3x-3de17d8f5679f4701a9ca3a1777a9816ff1620f7e7c6c52f6494f16282d51311.png",
        "Stock Up":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Bulk-circle@3x-df2c4f58ad2845b152f79c923c0c2b899012de1c0d7e2a25583e808254cf8693.png",
        "Retail":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Retail-circle@3x-b317739a644d186c4226fbf647c905e0b1bb6f7a028e0b2041177a5ad27db580.png",
        "Pharmacy":"https://www.instacart.com/image-server/45x/www.instacart.com/assets/home/category_filters/Pharmacy-circle@3x-1bed85c24ca37cfc9c10b88da3702d6ce39e479ee1ad68667802294d14ccea09.png"
    }

    return catgories
}


function returnShops(){
    let shops = [
        {
            "name":"BJ's Wholesale Club",
            "img":"https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/26/67dffcb3-b227-416a-bc75-8ce2ca10fd92.png"
        }
        ,
        {
            "name":"Hannaford Supermarket",
            "img":"https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/289/fce4ae81-9346-4090-9ed2-1ee7262991f2.png"
        }
        ,
        {
            "name":"Shaw's",
            "img":"https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/375/195ff19d-0f0f-4ff8-969c-9109dbee12c7.png"
        }
        ,
        {
            "name":"Target",
            "img":"https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/648/e1c282e5-21e7-4ebb-8936-cf23fbec29d9.png"
        }
        ,
        {
            "name":"ALDI",
            "img":"https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
        }
    ]
    return shops
}


export {returnCatgories,returnShops};