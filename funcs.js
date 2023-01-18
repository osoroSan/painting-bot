const Matrix =require("./Matrix")
class ActivationFunction {
    constructor(func, dfunc) {
    this.func = func;
    this.dfunc = dfunc;
}
}

  // SIGMOID
let sigmoid = new ActivationFunction(
    x => 1 / (1 + Math.exp(-x)),
   y => y * (1 - y)
);
  //TANH\
let tanh = new ActivationFunction(
    x => Math.tanh(x),
   y => 1 - (y * y)
);

let relu=new ActivationFunction(
	x=>Math.max(x,0),
y=>{	
	if(y>=0){return 1}
	if(y<0){	return 0	}
	}
	)
   


