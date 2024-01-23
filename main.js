/*async function getPost()
{
 const response=await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
let result ="";
result+=posts.map(function(post){
 return `
 <h2>${post.title}</h2>
 <p>${post.body}</p>
 `
})

for(let i=0;i<posts.length;i++)
{
  result+=`
  <h2>${posts[i].title}</h2>
 <p>${posts[i].body}</p>
  `;
}
document.querySelector(".posts").innerHTML=result;
}*/
 async function getPizza ()
{
const response= await fetch("https://dummyjson.com/products");
const data=await response.json();
const products = data.products;
const result =products.map(function(ele){
  return  `
  <div class = "recipe">
  <h2>${ele.title} </h2>
  <img src =${ele.thumbnail } />
  <h2>${ele.price} </h2>
  <h2>${ele.brand} </h2>
  </div>
  `;
}).join('');
document.querySelector(".recipes").innerHTML=result;
}
getPizza ();
