let name = document.getElementById("name")
let rollNo = document.getElementById("rollNo")
let pic = document.getElementById("pic")
let submit = document.getElementById("submit")
let inputs = document.getElementById("inputs")


console.log(pic);

let card = document.getElementById("card")
let image = document.getElementById("image")
let stdName = document.getElementById("stdName")
let stdRno = document.getElementById("stdRno")

let card1= document.getElementById("card1")
let image1 = document.getElementById("image1")
let stdName1 = document.getElementById("stdName1")
let stdRno1 = document.getElementById("stdRno1")

submit.onclick= function(){
    let newBtn =document.createElement("button")
    let back =document.createElement("button")
    let text =document.createTextNode("Generate another Card")
    let text1 =document.createTextNode("Back to Home")
    stdName.innerHTML=name.value
    stdRno.innerHTML=rollNo.value
    image.src=URL.createObjectURL(pic.files[0])
    
    back.style.marginTop="20px"
    back.style.marginBottom="10px"
    inputs.style.display="none"
    card.style.display="block"
    newBtn.append(text)
    back.append(text1)
    card.after(newBtn)
    card.before(back)
    console.log("hello");
    console.log(pic);
    newBtn.addEventListener("click" , function(){
        card1.style.display="block"
        card.style.display="none"
        newBtn.style.display="none"
        stdName1.innerHTML=name.value
        stdRno1.innerHTML=rollNo.value
        image1.src=URL.createObjectURL(pic.files[0])
    })
    back.addEventListener("click" , function(){
        card.style.display="none"
        card1.style.display="none"
        back.style.display="none"
        inputs.style.display="block"
        newBtn.style.display="none"
    })

}
