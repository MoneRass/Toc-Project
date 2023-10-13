const meat = document.querySelectorAll('.meat');
const grill_top = document.querySelector('.grill-top');
const grilling = document.querySelector('.grilling');

//1. Drag
function dragMeat(event){
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log(event.target.id);
}

meat.forEach((meat) => {
    meat.addEventListener('dragstart', dragMeat);
})

//2. Drop
function dragOverMeat(event){
    event.preventDefault();
}

function dropMeat(event){
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain')
    const image = document.querySelector('#'+id);
    grilling.src = image.src;
}

grill_top.addEventListener('dragover', dragOverMeat);
grill_top.addEventListener('drop', dropMeat);


document.addEventListener('DOMContentLoaded', function(){
    create_transition_block()
    document.getElementById('container').style.display = 'flex'
    document.getElementById('transition-container').style.animation = 'sliding-left-out 1s forwards'
  
    function create_transition_block(){
      const container = document.getElementById('transition-container')
      let height = 30
      let curWidth = window.innerWidth * 1.2
      let sumHeight = 0
    
      while(sumHeight < window.innerHeight){
        const randomHeight = height
        const randomWidth = curWidth
        curWidth += 50
    
        // Create the animated block
        const animatedBlock = document.createElement('div')
        animatedBlock.id = 'animatedBlock'
        animatedBlock.classList.add('transition-block')
        animatedBlock.style.height = randomHeight + 'px'
        animatedBlock.style.width = randomWidth + 'px'
    
        // Add the block to the container
        container.appendChild(animatedBlock);
        sumHeight += randomHeight
      }
    }
  })