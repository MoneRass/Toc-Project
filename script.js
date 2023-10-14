document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the button
    document.getElementById('flip-button').addEventListener('click', function () {
        alert('Button Clicked!'); // Replace with your desired action
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let progress = 0;
    const progressBar = document.getElementById('progress');
    let isIncreasing = false; // Flag to track whether the gauge is increasing

    // Function to increase the gauge progress over time
    function increaseProgress() {
        if (progress < 100 && isIncreasing) {
            progress += 0.1; // Increase the progress by 1% (adjust as needed)
            progressBar.style.height = progress + '%';
            requestAnimationFrame(increaseProgress);
        }
    }

    // Function to toggle the gauge increase
    function toggleGauge() {
        isIncreasing = !isIncreasing;
        if (isIncreasing) {
            increaseProgress();
        }
    }

    // Add a click event to the "Flip" button to toggle the gauge increase
    document.getElementById('gas-button').addEventListener('click', function () {
        toggleGauge();
    });
});




// ===============================================================================================================
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

document.addEventListener('DOMContentLoaded', function(){
    document.body.style.backgroundImage = 'url(\'state_bread_background.png\')'
  })