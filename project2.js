const clock=document.getElementById('clock')
setInterval(()=>{
    let date=new Date()                     
    clock.innerHTML=date.toLocaleTimeString();
    // clock.innerHTML=date.toLocaleDateString();
},1000)