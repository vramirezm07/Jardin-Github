const mouseFollower = document.querySelector('.mouse-follower');

document.addEventListener('mousemove', (e) => {
  mouseFollower.style.left = e.clientX + 'px';
  mouseFollower.style.top = e.clientY + 'px';
});