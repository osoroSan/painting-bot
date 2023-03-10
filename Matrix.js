class Matrix {
constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));}
    static fromArray(arr) {
      return new Matrix(arr.length, 1).map((e, i) => arr[i]);
    }
    static subtract(a, b) {
      return new Matrix(a.rows, a.cols)
        .map((_, i, j) => a.data[i][j] - b.data[i][j]);
    }
    toArray() {
      let arr = [];
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          arr.push(this.data[i][j]);
        }}
      return arr;
    }
   randomize() {
      return this.map(e => Math.random() * 2 - 1);
    }
     add(n) {
      if (n instanceof Matrix) {
        return this.map((e, i, j) => e + n.data[i][j]);
      } else {
        return this.map(e => e + n)}}
    static multiply(a, b) {
      return new Matrix(a.rows, b.cols)
        .map((e, i, j) => {
          // Dot product of values in col
          let sum = 0;
          for (let k = 0; k < a.cols; k++) {
            sum += a.data[i][k] * b.data[k][j]}
          return sum;
        })}  
    map(func) {
      // Apply a function to every element of matrix
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let val = this.data[i][j];
          this.data[i][j] = func(val, i, j);
        }}
      return this}
    serialize(){return JSON.stringify(this)}  
    static deserialize(data) {
      if (typeof data == 'string') {
        data = JSON.parse(data)}
      let matrix = new Matrix(data.rows, data.cols);
      matrix.data = data.data;
      return matrix;
    } }  