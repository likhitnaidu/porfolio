const MIN_LOADING_TIME = 4000;

const start = Date.now();

window.addEventListener("load", function () {
  const elapsed = Date.now() - start;
  const remaining = MIN_LOADING_TIME - elapsed;

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, remaining > 0 ? remaining : 0);
});

// const container = document.querySelector('.tilt-container');
// const img = container.querySelector('img');

// container.addEventListener('mousemove', e => {
//   const { width, height, left, top } = container.getBoundingClientRect();
//   const x = e.clientX - left;
//   const y = e.clientY - top;

//   const centerX = width / 2;
//   const centerY = height / 2;

//   const rotateX = ((y - centerY) / centerY) * 10; 
//   const rotateY = ((x - centerX) / centerX) * -10; 

//   img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// container.addEventListener('mouseleave', () => {
//   img.style.transform = `rotateX(0deg) rotateY(0deg)`;
// });
