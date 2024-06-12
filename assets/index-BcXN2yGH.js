var L=Object.defineProperty;var S=(i,t,o)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var s=(i,t,o)=>(S(i,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const h of e)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(e){const h={};return e.integrity&&(h.integrity=e.integrity),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?h.credentials="include":e.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(e){if(e.ep)return;e.ep=!0;const h=o(e);fetch(e.href,h)}})();const r={rootDiv:document.getElementById("app"),inGame:!1};r.rootDiv&&(r.rootDiv.style.height="100vh",r.rootDiv.style.width="100%");const P=.9*window.innerHeight;let D;window.innerWidth>760?D=.3*window.innerWidth:D=window.innerWidth;const n={windowHeight:P,windowWidth:D},F="/LF-SE-TS-Doodle-Jump/assets/platform-BZc9b0dx.png";class c{constructor(t,o){s(this,"x");s(this,"y");this.x=t,this.y=o}}const C=new Image;C.src=F;const u={sprite:C,width:64,height:25,position:[new c(11,100)]};class E{constructor(t,o,l,e){s(this,"position");s(this,"width");s(this,"height");s(this,"speed");this.position=t,this.width=o,this.height=l,this.speed=e}draw(t){t.drawImage(u.sprite,u.position[0].x,u.position[0].y,u.width,u.height,this.position.x,this.position.y,this.width,this.height)}move(){this.position.y+=this.speed}update(){this.move()}}function y(i,t){const o=Math.ceil(i),l=Math.floor(t);return Math.floor(Math.random()*(l-o+1)+o)}const x=.2*n.windowWidth,H=n.windowHeight*.02,a={position:new c(y(0,n.windowWidth-x),H),width:x,height:H,speed:1},T="/LF-SE-TS-Doodle-Jump/assets/player-D5kaW0jy.png",M=new Image;M.src=T;const f={sprite:M,width:92,height:92,position:[new c(0,0),new c(92,0),new c(182,0)]},m={lateralInterval:null,inGame:!1,doodleFalling:!0,doodleAirInterval:null,dummyTime:0};class O{constructor(t,o,l,e){s(this,"position");s(this,"width");s(this,"height");s(this,"speedx");s(this,"speedy",0);s(this,"lookDirection",0);s(this,"prevDirection",this.lookDirection);this.position=t,this.width=o,this.height=l,this.speedx=e}draw(t){t.drawImage(f.sprite,f.position[this.lookDirection].x,f.position[this.lookDirection].y,f.width,f.height,this.position.x,this.position.y,this.width,this.height)}move(t){clearInterval(m.lateralInterval);let o;t||(o=-1),t?(o=1,this.lookDirection=1):(o=-1,this.lookDirection=0),this.position.x+=o*this.speedx,this.position.x<=0&&(this.position.x=n.windowWidth-this.width),this.position.x>=n.windowWidth&&(this.position.x=0)}dropAndBounce(t){let o=!1;const l=.08;t.forEach(e=>{document.body.style.backgroundColor="white",e.position.y+e.height>=this.position.y&&e.position.y<=this.position.y+this.height&&e.position.x+e.width>=this.position.x&&e.position.x+e.width<=this.position.x+e.width+this.width&&(o=!0)}),this.position.y<=n.windowHeight*.2&&(this.speedy=0),this.speedy=this.speedy+l,this.position.y+=this.speedy,m.doodleFalling&&o?(m.doodleFalling=!1,this.speedy=-5*this.position.y/n.windowHeight,this.prevDirection=this.lookDirection,this.lookDirection=2):this.speedy>=0&&(m.doodleFalling=!0,this.lookDirection=this.prevDirection)}}const p=document.createElement("canvas"),W=document.createElement("h1");W.style.backgroundColor="wheat";function b(){r.rootDiv&&(r.rootDiv.innerHTML="",r.rootDiv.appendChild(W),r.rootDiv.appendChild(p))}let d=[];function A(){const i=new E(new c(y(0,n.windowWidth-a.width),a.position.y),a.width,a.height,a.speed);d.push(i)}const w=new O(new c(y(0,n.windowWidth-a.width),n.windowHeight/2),a.width/2,a.width/2,20);function B(){for(let i=0;i<5;i++)d.push(new E(new c(y(0,n.windowWidth-a.width),n.windowHeight*i/5),a.width,a.height,0));w.position.x=d[2].position.x+d[2].width/2,w.position.y=d[2].position.y-d[2].height*2}let k=0;function I(){k=5*(n.windowHeight-w.position.y)/n.windowHeight,v.clearRect(0,0,n.windowWidth,n.windowHeight),d.forEach(i=>{i.update(),i.draw(v),i.speed=k}),d=d.filter(i=>i.position.y<n.windowHeight),d[d.length-1].position.y>100&&A(),w.draw(v),w.dropAndBounce(d),requestAnimationFrame(I)}const v=p.getContext("2d");function G(){r.rootDiv&&(r.rootDiv.innerHTML=""),b(),r.inGame=!0;const i=n.windowWidth,t=n.windowHeight;p.width=i,p.height=t,p.style.display="block",p.style.margin="0 auto",p.style.backgroundColor="#87CEEB",B(),I()}function N(){if(r.rootDiv){r.rootDiv.innerHTML="";const i=document.createElement("div");i.style.display="flex",i.style.height="100vh",i.style.width="100%",i.style.justifyContent="center",i.style.alignItems="center",i.style.position="relative",i.className="home-page";const t=document.createElement("button");t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)",t.value="Start Game",t.innerHTML="Start Game",t.className="start-btn",t.addEventListener("click",()=>{G(),r.inGame=!0});const o=document.createElement("p");o.innerHTML=`Press'w' or click of left &nbsp 
                                side to move left And`,i.appendChild(t),r.rootDiv.appendChild(i)}}N();window.addEventListener("keypress",i=>{switch(i.key){case"a":w.move(!1);break;case"d":w.move(!0);break}});
