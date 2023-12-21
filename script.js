let block1 = document.querySelector('#block1')
let block2 = document.querySelector('#block2')
let block3 = document.querySelector('#block3')
let block4 = document.querySelector('#block4')
let blocks = document.querySelector('.blocks')

setInterval(function(){
    let time = new Date()
    let newear = new Date(2024,0,1,0,0,1)
    let secs = 59-time.getSeconds()
    let min = 59-time.getMinutes()
    let hour = 23-time.getHours()
    secs=secs<10?"0"+secs:secs;
    min=min<10?'0'+min:min;
    hour=hour<10?'0'+hour:hour;
    block1.innerHTML= Math.floor((newear-time)/1000/60/60/24)+'<span>дней</span>';
    block2.innerHTML= hour+'<span>часов</span>';
    block3.innerHTML= min+'<span>минут</span>';
    block4.innerHTML= secs+'<span>секунд</span>';
    if(newear<=time){
        blocks.innerHTML='С НОВЫМ ГОДОМ!!!!!!'

    }
},1000)




