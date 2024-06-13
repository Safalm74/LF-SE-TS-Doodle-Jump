var A=Object.defineProperty;var G=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>(G(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const H of c.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&a(H)}).observe(document,{childList:!0,subtree:!0});function o(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(i){if(i.ep)return;i.ep=!0;const c=o(i);fetch(i.href,c)}})();const h={rootDiv:document.getElementById("app"),inGame:!1,highScore:0};h.rootDiv&&(h.rootDiv.style.height="100vh",h.rootDiv.style.width="100%");const F=.9*window.innerHeight;let S;window.innerWidth>760?S=.3*window.innerWidth:S=window.innerWidth;const s={windowHeight:F,windowWidth:S},B="/LF-SE-TS-Doodle-Jump/assets/platform-BZc9b0dx.png";class d{constructor(t,o){r(this,"x");r(this,"y");this.x=t,this.y=o}}const M=new Image;M.src=B;const u={sprite:M,width:64,height:25,position:[new d(11,100)]};class k{constructor(t,o,a,i){r(this,"position");r(this,"width");r(this,"height");r(this,"speed");this.position=t,this.width=o,this.height=a,this.speed=i}draw(t){t.drawImage(u.sprite,u.position[0].x,u.position[0].y,u.width,u.height,this.position.x,this.position.y,this.width,this.height)}move(){this.position.y+=this.speed}update(){this.move()}}function g(e,t){const o=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-o+1)+o)}const E=.2*s.windowWidth,I=s.windowHeight*.02,p={position:new d(g(0,s.windowWidth-E),I),width:E,height:I,speed:1},O="/LF-SE-TS-Doodle-Jump/assets/player-D5kaW0jy.png",L=new Image;L.src=O;const f={sprite:L,width:92,height:92,position:[new d(0,0),new d(92,0),new d(182,0)]},v={lateralInterval:null,inGame:!1,doodleFalling:!0,doodleAirInterval:null,dummyTime:0};function $(e){console.log("game over"),h.inGame=!1,h.highScore<e&&(h.highScore=e);const t=document.createElement("div");t.style.width=`${window.innerWidth*.2}px`,t.style.height=`${window.innerWidth*.2}px`,t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)",t.style.textAlign="center",t.style.backgroundColor="#eee",t.style.boxShadow="0 .2rem 1.2rem .2rem rgba(20,20,20,0.3)",t.style.borderRadius="5px";const o=document.createElement("h2");o.innerHTML="GAME OVER";const a=document.createElement("h3");a.innerHTML=`Score:${e}`;const i=document.createElement("button");i.value="Go Home",i.innerHTML="Go Home",i.className="go-home-btn",i.addEventListener("click",()=>{C()});const c=document.createElement("h3");c.innerHTML=`Best Score:${h.highScore}`,t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(i),h.rootDiv&&h.rootDiv.appendChild(t)}class N{constructor(t,o,a,i){r(this,"position");r(this,"width");r(this,"height");r(this,"speedx");r(this,"speedy",0);r(this,"lookDirection",0);r(this,"prevDirection",this.lookDirection);r(this,"score",0);r(this,"onPower",!1);r(this,"activatedPower",null);this.position=t,this.width=o,this.height=a,this.speedx=i}draw(t){t.drawImage(f.sprite,f.position[this.lookDirection].x,f.position[this.lookDirection].y,f.width,f.height,this.position.x,this.position.y,this.width,this.height),this.position.y>s.windowHeight&&$(this.score)}move(t){clearInterval(v.lateralInterval);let o;t||(o=-1),t?(o=1,this.lookDirection=1):(o=-1,this.lookDirection=0),this.position.x+=o*this.speedx,this.position.x<=0&&(this.position.x=s.windowWidth-this.width),this.position.x>=s.windowWidth&&(this.position.x=0)}powerup(){this.onPower&&(this.activatedPower.position.x=this.position.x,this.activatedPower.position.y=this.position.y,this.score+=1)}dropAndBounce(t){let o=!1;const a=.08;t.forEach(i=>{this.onPower&&(i.speed=15),i.position.y+i.height>=this.position.y&&i.position.y<=this.position.y+this.height&&i.position.x+i.width>=this.position.x&&i.position.x+i.width<=this.position.x+i.width+this.width&&(o=!0)}),this.position.y<=s.windowHeight*.2&&(this.speedy=0),this.speedy=this.speedy+a,this.position.y+=this.speedy,v.doodleFalling&&o?(v.doodleFalling=!1,this.speedy=-5*this.position.y/s.windowHeight,this.prevDirection=this.lookDirection,this.lookDirection=2,this.score++):this.speedy>=0&&(v.doodleFalling=!0,this.lookDirection=this.prevDirection)}}const R="/LF-SE-TS-Doodle-Jump/assets/jetSheet-epum0WND.png",T=new Image;T.src=R;const y={sprite:T,width:17,height:54,position:[new d(39,128),new d(8,0),new d(39,0),new d(71,0),new d(104,0),new d(8,64),new d(39,64),new d(71,64),new d(104,64),new d(8,128)]};class J{constructor(t,o,a,i){r(this,"position");r(this,"width");r(this,"height");r(this,"speed");r(this,"isActive",!1);r(this,"animationIndexTracker",0);this.position=t,this.width=o,this.height=a,this.speed=i}animationIndex(){return this.isActive?this.animationIndexTracker=this.animationIndexTracker%8+1:this.animationIndexTracker=0,this.animationIndexTracker}draw(t){t.drawImage(y.sprite,y.position[this.animationIndex()].x,y.position[this.animationIndex()].y,y.width,y.height,this.position.x,this.position.y,this.width,this.height)}move(){this.position.y+=this.speed}update(){this.move()}}const w=document.createElement("canvas"),D=document.createElement("h1");D.style.backgroundColor="wheat";D.style.width=`${s.windowWidth}`;function q(){h.rootDiv&&(h.rootDiv.innerHTML="",h.rootDiv.appendChild(D),h.rootDiv.appendChild(w))}let l=[],m=[];function z(e){const t=new J(new d(e.position.x+e.width/2,e.position.y-54+e.height),17,54,0);m.push(t)}function K(){const e=new k(new d(g(0,s.windowWidth-p.width),p.position.y),p.width,p.height,p.speed),t=g(1,100);!n.onPower&&t%2==0&&t<50&&z(e),l.push(e)}const n=new N(new d(g(0,s.windowWidth-p.width),s.windowHeight/2),p.width/2,p.width/2,20);function V(){for(let e=0;e<5;e++)l.push(new k(new d(g(0,s.windowWidth-p.width),s.windowHeight*e/5),p.width,p.height,0));n.position.x=l[2].position.x+l[2].width/2,n.position.y=l[2].position.y-l[2].height*2}let P=0;function W(){P=5*(s.windowHeight-n.position.y)/s.windowHeight,x.clearRect(0,0,s.windowWidth,s.windowHeight),l.forEach(e=>{e.update(),e.draw(x),e.speed=P}),l=l.filter(e=>e.position.y<s.windowHeight),m.forEach(e=>{e.update(),e.draw(x),e.speed=P}),m.forEach(e=>{e.position.y+e.height>=n.position.y&&e.position.y<=n.position.y+n.height&&e.position.x+e.width>=n.position.x&&e.position.x+e.width<=n.position.x+e.width+n.width&&!n.onPower&&(n.onPower=!0,e.isActive=!0,n.activatedPower=e,m=m.filter(t=>t===n.activatedPower),setTimeout(()=>{n.onPower=!1,m=[]},1500))}),l[l.length-1].position.y>100&&K(),n.draw(x),n.dropAndBounce(l),n.powerup(),D.innerHTML=`Score: ${n.score}`,h.inGame&&requestAnimationFrame(W)}function X(){n.position=new d(g(0,s.windowWidth-p.width),s.windowHeight/2),n.score=0}const x=w.getContext("2d");function Z(){X(),console.log("ingame"),h.rootDiv&&(h.rootDiv.innerHTML=""),q(),h.inGame=!0;const e=s.windowWidth,t=s.windowHeight;w.width=e,w.height=t,w.style.display="block",w.style.margin="0 auto",w.style.backgroundColor="#87CEEB",V(),W()}function C(){if(h.inGame=!1,console.log("Home"),h.rootDiv){h.rootDiv.innerHTML="";const e=document.createElement("div");e.style.display="flex",e.style.height="100vh",e.style.width="100%",e.style.justifyContent="center",e.style.alignItems="center",e.style.position="relative",e.className="home-page";const t=document.createElement("button");t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)",t.value="Start Game",t.innerHTML="Start Game",t.className="start-btn",t.addEventListener("click",()=>{Z(),h.inGame=!0});const o=document.createElement("p");o.innerHTML=`Press'w' or click of left &nbsp 
                                side to move left And`,e.appendChild(t),h.rootDiv.appendChild(e)}}C();window.addEventListener("keypress",e=>{if(!n.onPower)switch(e.key){case"a":n.move(!1);break;case"d":n.move(!0);break}});w.addEventListener("click",e=>{n.onPower||n.move(!(e.offsetX<s.windowWidth/2))});