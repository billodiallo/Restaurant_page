import Thiakiri from './img/thiakiri.jpg';
import Thiebouwekh from './img/thiebouwekh.jpg';
import Thieboudienne from './img/thieboudienne';
import Yassa from './img/yassa.jpg';

const foodpage = (() => {
  const contentContainer = document.querySelector('#content');
  const food = document.createElement('div');
  food.classList.add('container-fluid');
  food.setAttribute('id', 'menu');
  food.setAttribute('data-tab-content', '');
//   console.log('hello');

food.innerHTML = `
<div class='row mt-3 main-food'>
  <div class='col-12 col-md-6 d-flex py-3'>
    <div id='img1' class='col-6 image-food  img1'>
      
    </div>
    <div class='col-6 mx-2'>
      <h3 class='text-center'>Yassa</h3>
      <p>Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish </p>
    </div>
  </div>

  <div class='col-12 col-md-6 d-flex py-3'>
    <div id='img2' class='col-6 image-food  img1'>
      
    </div>
    <div class='col-6 mx-2'>
      <h3 class='text-center'>Thioubou weikh</h3>
      <p>White version of thieboudienne</p>
    </div>
  </div>

  <div class='col-12 col-md-6 d-flex py-3'>
    <div id='img3' class='col-6 image-food  img1'>
      
    </div>
    <div class='col-6 mx-2'>
      <h3 class='text-center'>Thiakiri</h3>
      <p>Thiakry or Degue is a sweet millet couscous dish eaten in West Africa
    </p>
    </div>
  </div>

  <div class='col-12 col-md-6 d-flex py-3'>
    <div id='img4' class='col-6 image-food  img1'>
      
    </div>

  
    <div class='col-6 mx-2'>
      <h3 class='text-center'>Thioubou</h3>
      <p>Thieboudienne/Ceebu Jen (Poisson au Riz) – a delicious one-pot meal with rice, fish stew and a variety of vegetables that is popular in Senegal. You’d love the layers of flavors in this dish!</p>
    </div>
  </div>
</div>`;
})();