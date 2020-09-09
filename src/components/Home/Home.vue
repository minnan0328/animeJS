<template>
  <div>
    <canvas id='canvas' width="500" height="500" class="canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: 'home',
  data(){
    return{}
  },
  mounted(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    

    let cw = canvas.clientHeight;
    let ch = canvas.clientHeight;
    // console.log(document.getElementsByClassName('canvas'));
    let circumference = 210 * 3.14;
    let circumference12 = circumference / 12;
    console.log(circumference,circumference12);
    let topX = cw / 2;
    let topY = ch / 10;

    let bottomX = cw / 2 ;
    let bottomY = (ch / 2) + ((ch / 2) - (ch / 10));
    let leftX = cw / 10;
    let leftY = ch / 2;

    let rightX = (cw / 2) + ((cw / 2) - (cw / 10));
    let rightY = ch / 2;

    let TopRightX = topX + circumference12;
    let TopRightY = topY + 5;

    ctx.fillStyle = "rgba(255,255,255,1)";
    
    let radian = Math.PI / 30;
    ctx.translate(cw / 2, 0);
    ctx.save();


    for(var i = 0; i <= 12; i++) {
      ctx.beginPath(); //線段開始
      ctx.arc((60 * i) + (cw - (i * cw / i)), (ch / 10) + (i * 30), 10, 210, Math.PI * 2, true);
      // ctx.moveTo((cw / i) + (cw / 10),(ch / i) + (ch / 10));
      ctx.rotate(i * radian);
      ctx.fill(); // 填滿
      ctx.save();
      for(var x = 11; x >= 0; x--){}
    }



    // ctx.beginPath(); //線段開始

    // ctx.arc(250,250,210,0,Math.PI*2,false);

    // ctx.moveTo(topX,topY);

    // ctx.arc(topX,topY,10,0,Math.PI*2,true); 

    // ctx.moveTo(TopRightX,TopRightY);

    // ctx.arc(TopRightX,TopRightY,10,0,Math.PI*2,true); 

    // ctx.moveTo(leftX,leftY);

    // ctx.arc(leftX,leftY,10,0,Math.PI*2,true); 

    // ctx.moveTo(bottomX,bottomY);

    // ctx.arc(bottomX,bottomY,10,0,Math.PI*2,true);

    // ctx.moveTo(rightX,rightY); 

    // ctx.arc(rightX,rightY,10,0,Math.PI*2,true);

    // ctx.moveTo(topX,0); 
    // ctx.moveTo(topY,0); 
    // ctx.lineTo((cw/2) + 200,(ch/2) + 200);
    // ctx.lineTo((cw/2) + 10,(ch/2) + 100);
    // ctx.lineTo(200,50);
    // ctx.lineTo(400,100);
    ctx.fill(); //填滿
    // tx.stroke(); //筆畫上色



		// var stgw = 1280;
		// var stgh = 720;


		// var loffset = 0;
		// var toffset = 0;

		// function _pexresize() {
		// 	var cw = window.innerWidth;
		// 	var ch = window.innerHeight;
		// 	if (cw<=ch*stgw/stgh) {
		// 		loffset = 0;
		// 		toffset = Math.floor(ch-(cw*stgh/stgw))/2;
		// 		canvas.style.width = cw + "px";
		// 		canvas.style.height = Math.floor(cw*stgh/stgw) + "px";
		// 	} else {
		// 		loffset = Math.floor(cw-(ch*stgw/stgh))/2;
		// 		toffset = 0;
		// 		canvas.style.height = ch + "px";
		// 		canvas.style.width = Math.floor(ch*stgw/stgh) + "px";
		// 	}
		// 	canvas.style.marginLeft = loffset +"px";
		// 	canvas.style.marginTop = toffset +"px";
		// }
    // _pexresize();
    


		// var count = 100;
		// var lcount = 6;

		// var layer = [];
		// var layery = [];

		// ctx.fillStyle = "rgba(255,255,255,0.5)";
		// for (var l=0;l<lcount;l++) {
    //   ctx.clearRect(0,0,stgw,stgh);
    //   console.log(ctx);
		// 	for (var i=0;i<count*(lcount-l)/1.5;i++) {
		// 		var myx = Math.floor(Math.random()*stgw);
		// 		var myy = Math.floor(Math.random()*stgh);
		// 		var myh = l*6+8;
    //     var myw = myh/10;
    
    //     console.log(
    //       "myx :",myx,
    //       "myy :",myy,
    //       "myh :",myh,
    //       "myw :",myw
    //     );

		// 		ctx.beginPath();
		// 		ctx.moveTo(myx,myy);
		// 		ctx.lineTo(myx+myw,myy+myh);
		// 		ctx.arc(myx, myy+myh, myw, 0, 1 * Math.PI);
		// 		ctx.lineTo(myx-myw,myy+myh);
		// 		ctx.closePath();
    //     ctx.fill();
    
		// 	}
		// 	layer[l] = new Image();
		// 	layer[l].src = canvas.toDataURL("image/png");
		// 	layery[l] = 0;
		// }


		// var stt = 0;
		// var str = Date.now()+Math.random() * 4000;
		// var stact = false;

		// function animate() {
		// 	ctx.clearRect(0,0,stgw,stgh);

		// 	for (var l=0;l<lcount;l++) {
		// 		layery[l] += (l+1.5)*5;
		// 		if (layery[l]>stgh) {

		// 			layery[l] =layery[l]-stgh;
		// 		}
		// 		ctx.drawImage(layer[l],0,layery[l]);
		// 		ctx.drawImage(layer[l],0,layery[l]-stgh);
		// 	}
		// 	if (Date.now()>str) {
		// 		stact = true;
		// 	}
		// 	if (stact) {
		// 		stt++;
		// 		if (stt<5+Math.random()*10) {
		// 			var ex = stt/30;
		// 		} else {
		// 			var ex = (stt-10)/30;
		// 		}
		// 		if (stt>20) {
		// 			stt = 0;
		// 			stact = false;
		// 			str = Date.now()+Math.random()*8000+2000;
		// 		}

		// 		ctx.fillStyle = "rgba(255,255,255,"+ex+")";
		// 		ctx.fillRect(0,0,stgw,stgh);
		// 	}
		// 	window.requestAnimationFrame(animate);
		// }


		// animate();
  }
}
</script>
<style lang="scss" scoped>
  @import './Home.scss';
</style>
