function draw(ctx, n , theta , length, x , y) {
  	
  	if(n == 0){  

    	// set line stroke and line width
    	ctx.strokeStyle = 'black';
    	ctx.lineWidth = 1;

    	// draw a red line
    	ctx.beginPath();
    	ctx.moveTo(x, y);
    	ctx.lineTo(x + length * Math.cos(Math.PI * theta / 180.0), y + length * Math.sin(Math.PI * theta / 180.0));
    	ctx.stroke();
      return;
    }
  
  draw(ctx, n-1, theta, length/3, x , y);
  x = x + length/3 * Math.cos(Math.PI * theta / 180.0)
  y = y + length/3 * Math.sin(Math.PI * theta / 180.0)
  draw(ctx, n-1, theta-60, length/3, x , y );
  theta = theta-60
  x = x + length/3 * Math.cos(Math.PI * theta / 180.0)
  y = y + length/3 * Math.sin(Math.PI * theta / 180.0)
  draw(ctx, n-1, theta-240, length/3, x, y);
  theta = theta-240
  x = x + length/3 * Math.cos(Math.PI * theta / 180.0)
  y = y + length/3 * Math.sin(Math.PI * theta / 180.0)
  draw(ctx, n-1, theta-60, length/3, x, y);
  
  
}


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

draw(ctx, 6 , 0 , 3*3*3*3*3, 0, 400);
draw(ctx, 6 , 120 , 3*3*3*3*3, 3*3*3*3*3 , 400);
draw(ctx, 6 , -120 , 3*3*3*3*3, 3*3*3*3*3*(1-Math.cos(Math.PI * 60 / 180.0)) , 400 + 3*3*3*3*3*Math.sin(Math.PI * 60 / 180.0));
