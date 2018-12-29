const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.4;

//Setting the first default selected image opacity on click 
imgs[0].style.opacity = opacity;

imgs.forEach((img)=>{
  img.addEventListener('click', e=>{
    // Reset the opacity
    imgs.forEach(img=>(img.style.opacity = 1))

    // Changing the current src of clicked image
    current.src = e.target.src

    // Add fade-in class
    current.classList.add('fade-in');

    // Removing the fade-in class after .5 sec
    setTimeout(()=> current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
  })
})