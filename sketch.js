function setup() {
  createCanvas(500,400)
}

function draw() {
  
   background(255)
  fill(250)
  
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('white')
      
    } else {
      fill ('black')
    }    
    rect(x, height/2 , 40, 40 )
    x += 40; 
  }
  
   var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('black')
      
    } else {
      fill ('white')
    }    
    rect(x, 240, 40, 40 )
    x += 40; 
  }
  
   var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('white')
      
    } else {
      fill ('black')
    }    
    rect(x, 280, 40, 40 )
    x += 40; 
  }
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('black')
      
    } else {
      fill ('white')
    }    
    rect(x, 320, 40, 40 )
    x += 40; 
  }
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('black')
      
    } else {
      fill ('white')
    }    
    rect(x, 160, 40, 40 )
    x += 40; 
  }
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('white')
      
    } else {
      fill ('black')
    }    
    rect(x, 120, 40, 40 )
    x += 40; 
  }
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('black')
      
    } else {
      fill ('white')
    }    
    rect(x, 80, 40, 40 )
    x += 40; 
  }
  var x = 50
  for ( var count = 0; count < 8; count++) {
    if ( count % 2 === 0) {
      fill ('white')
      
    } else {
      fill ('black')
    }    
    rect(x, 40, 40, 40 )
    x += 40; 
  }
}
