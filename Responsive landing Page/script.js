// Assuming the navbar has a class of 'navbar' and the image is within a class 'hero'
document.querySelector('.hero img').addEventListener('mouseover', function() {
  document.querySelector('.navbar').style.backgroundColor = '#d01c28'; // Red color
});

document.querySelector('.hero img').addEventListener('mouseout', function() {
  document.querySelector('.navbar').style.backgroundColor = ''; // Revert to original color
});

// JavaScript to change menu style when scrolled
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scroll-nav');
  } else {
      header.classList.remove('scroll-nav');
  }
});