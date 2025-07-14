const makeChange = (c) => {
    let q = 0 
    let value = 0
    while(c>value+25){
        value += 25
        q++;
    }
     let d = 0 
    while(c>value+10){
        value += 10
        d++;
    }
     let n = 0 
    while(c>value+5){
        value += 5
        n++;
    }
     let p = 0 
    while(c>=value+1){
        value += 1
        p++;
    };
      let obj = {
  q: q,
  d: d,
  n: n,
  p: p
};
    return obj
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
