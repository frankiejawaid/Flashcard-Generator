//Creating constructor function 

function BasicCard (front,back){

    this.front = front;
    this.back = back;
};


function ClozeCard (text,cloze){

    BasicCard.apply(this, arguments);
};

 

 ClozeCard.prototype = new BasicCard();

 ClozeCard.prototype.partial = function partial(){

     return this.front.replace(this.back,"...")    
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.back); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial()); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.front);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze("This doesn't work", "oops"); 

console.log(firstPresident);
console.log(firstPresidentCloze);

