AFRAME.registerComponent("marker-handler", {
init:function(){
    var button1=document.createElement("button")
    button1.innerHTML="Rate Us"
    button1.setAttribute("id","rating-button")
    button1.setAttribute("class","btn btn-warning")


    var button2=document.createElement("button")
    button2.innerHTML="Order Now"
    button2.setAttribute("id","order-button")
    button2.setAttribute("class","btn btn-warning")

    var buttondiv=document.getElementById("button-div")
    buttondiv.appendChild(button1)
    buttondiv.appendChild(button2)
    
}
})