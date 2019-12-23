let products:string[]= Array();
products[0]="TV";
products[1]="Mobile";
products[2]="NikeShoes";
let sales:number[]=[3400,45600,4200,67000];
console.log("2ndProduct:"+products[1]);
console.log("AllProducts:"+products.toString());
console.log("products Joined:"+products.join("-->"));
console.log("sliced from1:"+products.slice(1));
function search(product){
return product=="Mobile";
}
console.log("searching:"+products.filter(search));
console.log("sales>40000:"+sales.filter(function(price){
return price>=40000; 
}));