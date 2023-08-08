const projectImgs = document.querySelectorAll('.project_home__projects_image');
const navArrows = document.querySelectorAll('.project_home__nav_arrow');
const navNumber = document.querySelector('.project_home__nav_numbering_number');

const checkbox = document.getElementById('checkbox');

navArrows[0].onclick = showFirstImg;
navArrows[1].onclick = showSecondImg;

checkbox.addEventListener('change', () => {
  checkbox.classList.toggle('checkbox--is-active');
});

function showFirstImg() {
  projectImgs[0].classList.add('is-active');
  projectImgs[1].classList.remove('is-active');
  navArrows[1].classList.add('project_home__nav_arrow--active');
  navArrows[0].classList.remove('project_home__nav_arrow--active');
  navNumber.textContent = '01';
}

function showSecondImg() {
  projectImgs[0].classList.remove('is-active');
  projectImgs[1].classList.add('is-active');
  navArrows[0].classList.add('project_home__nav_arrow--active');
  navArrows[1].classList.remove('project_home__nav_arrow--active');
  navNumber.textContent = '02';
}
