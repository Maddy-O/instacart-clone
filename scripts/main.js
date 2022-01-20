import {returnShops} from "./data.js";
let shops = returnShops();

async function getData(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data
    }
    catch(err){
        console.log(err)
    }
}

function appendData(data,location){
    location.innerHTML = "";
    data.forEach(({strMeal,strMealThumb}) => {
        let div = document.createElement("div");
        let p1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = strMealThumb;
        p1.textContent = strMeal;

        div.append(img,p1);
        location.append(div)
    });
}


function appendProducts(data,location){
    let store_names = Object.keys(data);
    for(let i = 0;i<store_names.length;i++){
        // First Heading div.
        let heading_div = document.createElement("div");
        let text_div = document.createElement("div");

        let img1 = document.createElement("img");
        img1.src = shops[i]['img'];
        let p1 = document.createElement("p");
        p1.textContent = store_names[i];
        let p2 = document.createElement("p");
        p2.textContent = "Delivery avalaible"

        text_div.append(p1,p2)
        heading_div.append(img1,text_div)

        heading_div.id = "heading_div"
        let hr = document.createElement("hr");
        // Products content div.

        let div1 = document.createElement("div");
        data[store_names[i]].map((elem)=>{
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = elem['img'];
            let p2 = document.createElement("p");
            p2.textContent = elem['name'];
            div2.append(img,p2)
            div1.append(div2)
        })
        location.append(heading_div,div1,hr)
    }
}



export {getData,appendData,appendProducts};