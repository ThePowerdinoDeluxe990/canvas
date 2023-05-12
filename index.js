function draw(){
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
    

      const ctx = canvas.getContext("2d");
      ctx.fillRect(25, 25, 100, 100);

    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.fillRect(50,60,40,40)
    ctx.clearRect(50,70,30,30)

   
    ctx.font = "48px serif";
    ctx.textBaseline = "hanging";
    ctx.strokeText("Hola putos", 150, 100);
    }
}