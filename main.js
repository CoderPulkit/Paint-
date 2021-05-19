var mouseEvent="empty";
canvas=document.getElementById('myCanvas');
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "red";
    width_of_line = 2;
    var width=screen.width;
    canvas.addEventListener("mousedown",my_mousedown);
    newwidth= screen.width-70;

    newheight=screen.height-300;

    if (width<992) {
   document.getElementById("myCanvas").width=newwidth;
   document.getElementById("myCanvas").height=newheight;
   document.body.style.overflow="hidden";
    }
canvas.addEventListener("touchstart",my_touchstart);

    function my_touchstart()
    {
        console.log("my_touchstart");
    
  
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        
        ctx.arc(current_position_of_touch_x,current_position_of_touch_y,radius,0);
        
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    canvas.addEventListener("touchstart",my_touchstart);

    function my_touchstart()
    {
        console.log("my_touchstart");
    
  
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    function my_mousedown()
    {
        console.log("my_mousedown");
    
  
        last_position_of_x=e.clientX-canvas.offsetLeft;
        last_position_of_y=e.clientY-canvas.offsetTop;
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
         console.log("my_mouseove");
         current_position_of_x = e.clientX - canvas.offsetLeft;
         current_position_of_y = e.clientY - canvas.offsetTop;

         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
 
 
         
         ctx.arc(current_position_of_touch_x,current_position_of_touch_y,radius,0);
         
         ctx.stroke();
         
 
         last_position_of_x = current_position_of_touch_x; 
         last_position_of_y = current_position_of_touch_y;
    }