let rInt = n => Math.floor(Math.random() * n);

export class random {

  choice(seq){
    const type = typeof seq;
    if(!seq.length) throw New TypeError("Sequence has no property length");
    
    return seq[rInt(seq.length)];
    
  }
  
  shuffle(x, random) {
     
  }
  
}
