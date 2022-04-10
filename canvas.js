window.addEventListener("load",()=>{

        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext("2d");

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

    ctx.fillStyle="green"
    ctx.fillRect(35, 35, 500, 300);
 ctx.beginPath();
 ctx.arc(275, 185, 85, 3*Math.PI, 5 * Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.lineWidth=1;
  ctx.strokeStyle="black"
  ctx.stroke();


//   ctx.beginPath();
//   ctx.moveTo(100,100);
//   ctx.lineTo(200,100);
//   ctx.lineTo(200,200);
//   ctx.closePath();
//   ctx.stroke()


 
  
});
