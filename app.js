//       API calling
let btn = document.querySelector("button"); 
let p = document.querySelector("p");

btn.addEventListener("click", async ()=>{
    let res = await Getfacts();
    p.innerText = res;
});

let urlCat = "https://catfact.ninja/fact";
async function Getfacts() {
    try{
        let res = await axios.get(urlCat);
        return res.data.fact;
    }catch(err){
        console.log("error - ",err);
        return "No fact found";
    }
}