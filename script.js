const timer = document.getElementById('timer');



// const interval = setInterval(function(){
//     const date = new Date();
//     const second = date.getSeconds();
//     const minute = date.getMinutes();
//     timer.textContent = `${minute}:${second}`;
// }, 1000);
let interval;
let minute = 0, second = 0, centisecond = 0;

 const startTime=()=>{
    interval=setInterval(function(){
        centisecond = centisecond + 1;
        if (centisecond === 100) {
            second = second + 1;
            centisecond = 0;
        }

        if (second === 60) {
            minute = minute + 1;
            second = 0;
        }

        const withZero = num => num < 10 ? `0${num}` : num;
        const makeUpSecond = withZero(second);
        const makeUpMinute = withZero(minute);
        const makeCentisecond = withZero(centisecond);
        timer.textContent = `${makeUpMinute}: ${makeUpSecond}: ${makeCentisecond}`;
    }, 10);
}

// const btn = document.createElement('button');
// btn.textContent = 'clear interval';

// btn.addEventListener('click', function () {
//     clearInterval(interval);

// });
let m=0,s=0,ms=0;


const resetTime=()=> {

    const minute=`0${m}`;
    const second=`0${s}`;
    const millisecond=`0${ms}`;

    timer.textContent=`${minute}:${second}:${millisecond}`;
}
       


const startButton=document.createElement('button');
startButton.textContent='Start';
startButton.style.padding='5px 98px';
startButton.style.backgroundColor='#1ae11a';
startButton.style.border='2px solid #1ae11a';
startButton.style.color='#ffff';
startButton.style.fontSize='25px';
startButton.style.marginTop='30px';
startButton.style.cursor='pointer';
document.querySelector('body').appendChild(startButton);

startButton.addEventListener('click',()=>{
    startTime();
    resetfunction();
    stopfunction();
    startButton.style.display='none';

});

stratfunction=()=>{
    const startButton=document.createElement('button');
startButton.textContent='Start';
startButton.style.padding='5px 30px';
startButton.style.backgroundColor='#1ae11a';
startButton.style.border='2px solid #1ae11a';
startButton.style.color='#ffff';
startButton.style.fontSize='25px';
startButton.style.marginRight='0px';
startButton.style.cursor='pointer';
    
document.querySelector('body').appendChild(startButton);


startButton.addEventListener('click',()=>{
   
    //clearInterval(interval);
 
    resetfunction();
    startButton.style.display='none';
      
    startTime();
    
    
    

});
}
restratfunction=()=>{
    const startButton=document.createElement('button');
startButton.textContent='Restart';
startButton.style.padding='5px 40px';
startButton.style.backgroundColor='#1ae11a';
startButton.style.border='2px solid #1ae11a';
startButton.style.color='#ffff';
startButton.style.fontSize='25px';
startButton.style.marginRight='0px';
startButton.style.cursor='pointer';
startButton.style.marginLeft='3px';
startButton.style.marginTop='30px';
    
document.querySelector('body').appendChild(startButton);


startButton.addEventListener('click',()=>{
    startTime();
    startButton.style.display='none';
    stopfunction();
    

});
}

        
    
document.querySelector('body').appendChild(startButton);

const stopfunction=()=>{
    const stopButton=document.createElement('button');

    stopButton.textContent='Stop';
    stopButton.style.padding='5px 50px';
    stopButton.style.backgroundColor='red';
    stopButton.style.border='2px solid red';
    stopButton.style.color='#ffff';
    stopButton.style.fontSize='25px';
    stopButton.style.margin='0 2px';
   //stopButton.style.marginLeft='14px';
    stopButton.style.marginTop='30px';
    //stopButton.style.display='none';
    stopButton.style.cursor='pointer';
    
document.querySelector('body').appendChild(stopButton);
    
    
    stopButton.addEventListener('click',()=>{
         clearInterval(interval);
            restratfunction();
            stopButton.style.display='none';    
        });

        
        
    
         
}

const resetfunction=()=>{
    const reset=document.createElement('button');
    reset.textContent='Reset';
    reset.style.padding='5px 30px';
    reset.style.backgroundColor='#1ae11a';
    reset.style.border='2px solid #1ae11a';
    reset.style.color='#ffff';
    reset.style.fontSize='25px';
   // reset.style.marginLeft='9px';
    //reset.style.display='none';
    reset.style.cursor='pointer';
    document.querySelector('body').appendChild(reset);
     
    
    reset.addEventListener('click',()=>{
        clearInterval(interval);
        resetTime();
        stratfunction();
        reset.style.display='none';
       
    })
}





