//Problem - 1 Budget Calculator
console.log("----------------------Problem - 1----------------------\n");

function NumberOfProducts(C,W,Cof){

        let Computer = 1000;
        let Watch = 260;
        let Coffee = 50;
        let TotalCost= Computer * C + Watch * W + Coffee * Cof;
        console.log
        if((typeof(C,W,Cof))!== "number"){
            console.log("\nERROR INPUT")
        }
        else{
        console.log("Total Cost of the products is: " + TotalCost + " Tk");
    }
}

//take input
var TotalProduct = NumberOfProducts(2 ,4 ,6 );






// Problem -2 Product Search
console.log("\n----------------------Problem - 2----------------------\n");


var products = [
    {
        id: 1,
        title: "Laptop",
        price: 567,
        description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 2,
        title: "Mobile",
        price: 367,
        description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 3,
        title: "Watch",
        price: 180,
        description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 4,
        title: "Coffee",
        price: 40,
        description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },

];



// Search your product

let search = "laptop"


// Changing the search string for matching the array
const searchResult = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()



for(let i = 0; i < products.length; i++) {
    
    if(searchResult === products[i].title){    
        console.log("You are looking for " + products[i].title + ":");
        let result = products[i]
        console.log(result);
    }

    else if (searchResult !== products[i].title){
        result = "Product did not matched"
        // console.log(result);
    }
}
console.log(result);







// Problem - 3 Hidden Billionaire Calculator
console.log("\n----------------------Problem - 3----------------------\n");

function SavingYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        let TotalSaving = 366 * 10;    
        console.log("You saved " + TotalSaving + "Tk in " + year + ".");        
    } 
    else {
        let TotalSaving = 365 * 10;      
        console.log("You saved " + TotalSaving + "Tk in " + year + ".");
    }

}
//takeinput
//On which year you studied in class five
var Year = SavingYear(2012);