cross=(n,y)=>{
let jun=Math.floor(Math.random()*(n.length-0)+0)
let mun=Math.floor(Math.random()*(n.length-0)+0)
let xx=n[jun]
let yy=n[mun]
let mike=[]
let john=[]
let alice=[]
let petra=[]
let yb=yy.bias
let yw=yy.weights
let xb=xx.bias
let xw=xx.weights
let kid1=new ekko(xx.NN,sigmoid)
let kid2=new ekko(xx.NN,sigmoid)
//interchange1
//mutate everything 

for (let i = 0; i < xb.length; i++){
if(y===1){ 
john.push(interchange(xb[i],yb[i]))
mike.push(interchange(xw[i],yw[i]))
alice.push(interchange(yb[i],xb[i]))
petra.push(interchange(yw[i],xw[i]))
}
if(y===2){
let alex =interchange2(xb[i],yb[i])
let loki=interchange2(xw[i],yw[i])
john.push(alex[0])
mike.push(loki[0])
alice.push(alex[1])
petra.push(loki[1])
}
}
//interchange2
//mutate the bias
kid1.bias=john 
kid1.weights=mike
kid2.bias=alice
kid2.weights=petra
return [kid1,kid2]
}


interchange=(n,y)=>{
let abel=[]
let cain=[]
let d=n.data
let x=y.data
let count=0
for (let i = 0; i < d.length; i++) {
count ++
if(count==1){abel.push(d[i])}
if(count==2)	{
abel.push(x[i])
count=0
}
}
let sd=new Matrix(n.rows,n.cols)
sd.data=abel
return sd
}
interchange2=(n,y)=>{
let abel=[]
let cain=[]
let d=n.data
let x=y.data
let count=0
for (let i = 0; i < d.length; i++) {
let arr=[]
let sar=[]
let count=0
for (let j = 0; j< d[i].length; j++) {
count++
if(count===1){
arr.push(d[i][j])
sar.push(x[i][j])
	}
if(count===2){
arr.push(x[i][j])
sar.push(d[i][j])
		count=0
		}
		}
		abel.push(arr)
		cain.push(sar)
	}
let sd=new Matrix(n.rows,n.cols)
sd.data=abel
let ds=new Matrix(n.rows,n.cols)
ds.data=cain
return [sd,ds]
}
//works like a charm2
//mutates original net
mutate=(n,y,g)=>{
let sd =n.NN
let sum=0
	for(let i=1; i<sd.length; i++){ 
  sum+=sd[i-1]*sd[i]+sd[i]
    }
let num=Math.ceil(sum*y)
let wnum=Math.floor(num*g)
let bnum=num-wnum
let baxter=new ekko(sd)
baxter.weights=n.weights
baxter.bias=n.bias
for(let i=0; i<bnum; i++){ 
 let jun=Math.floor(Math.random()*(baxter.bias.length-0)+0)
let r=Math.floor(Math.random()*(baxter.bias[jun].data.length-0)+0)
let rand=Math.random()*(1-(-1))+(-1)
baxter.bias[jun].data.splice(r,1,[rand])
}
for(let i=0; i<wnum; i++){ 
let jun=Math.floor(Math.random()*(baxter.weights.length-0)+0)
let r=Math.floor(Math.random()*(baxter.weights[jun].data.length-0)+0)
let rand=Math.random()*(1-(-1))+(-1)
let p=Math.floor(Math.random()*(baxter.weights[jun].data[r].length-0)+0)
 baxter.weights[jun].data[r].splice(p,1,rand)
 }
 
   return baxter
	}