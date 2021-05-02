import Yassa from './img/yassa.jpg';
import Thiebouwekh from './img/thiebwekh.jpg';
import Thieboudienne from './img/tieboudienne.jpg';
import Thiakiri from './img/thiakiri.jpg';

const foodpage = (() => {
  const contentContainer = document.querySelector('#content');
  const food = document.createElement('div');
  food.classList.add('container-fluid');
  food.setAttribute('id', 'menu');
  food.setAttribute('data-tab-content', '');

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
      <h3 class='text-center'>thieboudienne</h3>
      <p>Thieboudienne/Ceebu Jen (Poisson au Riz) – a delicious one-pot meal with rice, fish stew and a variety of vegetables that is popular in Senegal. You’d love the layers of flavors in this dish!</p>
    </div>
  </div>

  <div class='col-12 col-md-6 d-flex py-3'>
    <div id='img4' class='col-6 image-food  img1'>
      
    </div>
    <div class='col-6 mx-2'>
      <h3 class='text-center'>Thiakiri</h3>
      <p>Thiakry or Degue is a sweet millet couscous dish eaten in West Africa</p>
  </div>
</div>`;
  contentContainer.appendChild(food);
  const img1 = new Image();
  img1.src = Yassa;
  img1.classList.add('image-food');
  const img11 = document.getElementById('img1');
  img11.appendChild(img1);

  const img2 = new Image();
  img2.src = Thiebouwekh;
  img2.classList.add('image-food');
  const img22 = document.getElementById('img2');
  img22.appendChild(img2);

  const img3 = new Image();
  img3.src = Thieboudienne;
  img3.classList.add('image-food');
  const img33 = document.getElementById('img3');
  img33.appendChild(img3);

  const img4 = new Image();
  img4.src = Thiakiri;
  img4.classList.add('image-food');
  const img44 = document.getElementById('img4');
  img44.appendChild(img4);
})();

export default foodpage;