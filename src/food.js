import Thieboudienne from './img/tieboudienne.jpg';
import Yassa from './img/yassa.jpg';
import Sarupe from './img/sarupe.jpeg';
import Thiakiri from './img/thiakiri.jpg';
import Maffe from './img/maffe.jpg';

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
        <h3 class='text-center'>THieboudienne</h3>
        <p>Tiep or thieb is a traditional dish from the Sahel, especially from Senegal, The Gambia and Mauritania and it is a staple in both countries. The version of tiep called thieboudienne or chebu jen is prepared with fish, rice and tomato sauce cooked in one pot, and it is considered the national dish </p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img2' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>Yassa </h3>
        <p>Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish ,Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish. Originally from Senegal, yassa has become popular throughout West Africa. Chicken yassa, prepared with onions, lemon or mustard, i</p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img3' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>Thiakiri</h3>
        <p>Thiakry is known by different names across the West African region; Thiakiri, Degue, Chiakiri, Chakri etc. It looks like rice pudding and is traditionally made with millet, evaporated milk, sweetened condensed milk, yogurt, sugar and spices.</p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img4' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>Maffe</h3>
        <p>Peanut stew or groundnut stew, also called as maafe, sauce d'arachide, tigadèguèna or domoda, is a stew that is a staple food in Western Africa.</p>
      </div>
    </div>
  </div>`;
  contentContainer.appendChild(food);

  const img1 = new Image();
  img1.src = Thieboudienne;
  img1.classList.add('image-food');
  const img11 = document.getElementById('img1');
  img11.appendChild(img1);

  const img2 = new Image();
  img2.src = Yassa;
  img2.classList.add('image-food');
  const img22 = document.getElementById('img2');
  img22.appendChild(img2);

  const img3 = new Image();
  img3.src = Thiakiri;
  img3.classList.add('image-food');
  const img33 = document.getElementById('img3');
  img33.appendChild(img3);

  const img4 = new Image();
  img4.src = Maffe;
  img4.classList.add('image-food');
  const img44 = document.getElementById('img4');
  img44.appendChild(img4);
})();
export default foodpage;