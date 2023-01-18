const sigmoid =(x)=> {return 1 / (1 + Math.exp(-x))}
const tanh=(x)=>{return Math.tanh(x)}
log=(s)=>{console.log(s)}
class ekko{ 
constructor(NN,activation){
this.activation=activation;
this.NN=NN;
this.bias=[];
this.weights=[];
this.createPar=(NeuralNet)=>{
for (let i = 1; i < NeuralNet.length; i++) {
this.bias.push(new Matrix(NeuralNet[i],1).randomize())
this.weights.push(new Matrix(NeuralNet[i],NeuralNet[i-1]).randomize())
}}
this.createPar(this.NN)}
predict(inputArray){
let inputs = Matrix.fromArray(inputArray);
let output = inputs;
for (let i = 0; i < this.weights.length; i++) {
output=Matrix.multiply(this.weights[i],output)  
output.add(this.bias[i])  
if(i<this.weights.length-1){
    output.map(tanh)
}
if(i===this.weights.length-1) {
    output.map(tanh)
}


}
return output.toArray()}}  