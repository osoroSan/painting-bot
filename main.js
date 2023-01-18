const svg =d3.select ("svg")
let tang=svg.append("rect").attr("width",50).attr("height",20).attr("fill","black").attr("x",185).attr("y",30)
addOb=(x,y,h,w,c)=>{
if(!c){
c="white"
}
let jojo = svg.append("rect").attr("x",x).attr ("y",y).attr("fill",c).attr("width",w).attr ("height",h)
obs.push([x,y,h,w])
}

let obs=[]

const av=document.querySelector("#av")
const gen=document.querySelector("#gen")
const max=document.querySelector("#max")



const tango=[185,30]
let populationSize =500
let mutationRate =0.05
let matingPool =[]
let sortPool=[]
let extract=20
let maxfit=0
let avfit
class pike{
constructor(){
this.x=200
this.y=450
this.brain
this.score
this.mass=svg.append("circle").attr("r",5).attr("fill","white").attr("cx",185).attr("cy",450)
	}	
think(){	

let pred=this.brain.predict([this.x,tango[0],this.y,tango[1]])
this.x+=pred[0]*1
this.y+=pred[1]*1
this.mass.attr("cx",this.x)
this.mass.attr("cy",this.y)


	}
fitness(){
this.score=1/Math.floor(Math.abs(this.y-tango[1])+Math.abs(
	this.x-tango[0]))
	}
sitrep(n){
if(n){
for(let i=0; i<obs.length; i++){ 
if(this.x>obs[i][0]&&this.x<obs[i][0]+obs[i][3]&& this.y>obs[i][1]&& this.y<obs[i][1]+obs[i][2]){
		this.crash=true
		}		    
}

}

let tary=tang.attr("y")
let tarx=tang.attr("x")
let tarh=parseInt(tary)+parseInt(tang.attr("height"))
let tarw=parseInt(tarx)+parseInt(tang.attr("width"))

if(this.x>tarx&&this.x<tarw&&this.y>tary&&this.y<tarh){
		this.hit=true

		}		    

if(this.x>400) {this.crash=true}
if(this.x<0) {this.crash=true}
if(this.y<10) {this.crash=true}
	
}
}

let cycles=800

let toby=0
let karen =false
cdna=(n)=>{
return new ekko([4,40,40,2])
	}

init=()=>{
	for(let i=0; i<populationSize; i++){ 
  let zhou=new pike()
zhou.brain=cdna()
matingPool.push(zhou)
 }
	
	}
	init()
rate=(n)=>{
for(let i=0; i<n.length; i++){ 
n[i].mass.remove()
  n[i].fitness()
 }
let c=n.map((e)=>{
	return e.score
	}).sort().reverse()
let mark=c[extract]
avfit=ave(c)
for(let i=0; i<matingPool.length; i++){ 
if(matingPool[i].score>0.33){
sortPool.push(matingPool[i].brain)
sortPool.push(matingPool[i].brain)
}

if(matingPool[i].score>maxfit){
	maxfit=matingPool[i].score
	sortPool.push(matingPool[i].brain)
	}
if(sortPool.length<extract){
if(matingPool[i].score>=mark){
sortPool.push(matingPool[i].brain)
	}
}

if(i===matingPool.length-1){

	for(let i=0; i<matingPool.length; i++){ 
if(matingPool[i].score===maxfit){
sortPool.push(matingPool[i].brain)
sortPool.push(matingPool[i].brain)

	}
}
	}
}
	matingPool.length=0
}

ave=(n)=>{
let mun=0
for(let i=0; i<n.length; i++){ 
mun+=n[i]
    }
return mun/n.length
}
nextgen=(n)=>{
for(let i=0; i<populationSize*0.5; i++){ 
let kid1=new pike()
let kid2=new pike()
let soul=cross(n,1)
if(maxfit===Infinity){
//mutationRate=0
}
kid1.brain=mutate(soul[0],mutationRate,0.1)
kid2.brain=mutate(soul[1],mutationRate,0.1)
//kid1.brain=soul[0]
//kid2.brain=soul[1]
matingPool.push(kid1)
matingPool.push(kid2)
}
sortPool.length=0
	}
let watchout=[]
let aby=0
addOb(250,100,20,150,"tomato")
addOb(250,280,20,150,"yellow")
addOb(0,100,20,150,"tomato")
// addOb(100,200,20,150,"red")
// addOb(0,280,20,100)
// addOb(100,370,20,150)

let dana=()=>{
//kelsie.think()
matingPool[0].think()
for(let i=0; i<matingPool.length; i++){ 
matingPool[i].think()
matingPool[i].sitrep(obs)
if(matingPool[i].hit){
sortPool.push(matingPool[i].brain)
}
if(matingPool[i].crash){
matingPool[i].mass.remove()
matingPool.splice(i,1)
}
}
	toby++
if(toby===cycles){			
	aby++
for(let i=0; i<matingPool.length; i++){ 
matingPool[i].fitness()

}
rate(matingPool)
nextgen(sortPool)
if(aby===100){
karen =true
}
toby=0
//gen.textContent=aby
//av.textContent=avfit 
//max.textContent =maxfit 
}
if(!karen){requestAnimationFrame(dana)}
}
requestAnimationFrame (dana)

