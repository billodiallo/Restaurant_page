const renderHome = (() => {
  // container

  const container = document.getElementById('content');
  const home = document.getElementById('div');
  home.classList.add('tab-content');
  home.innerHTML = `
    <div id="home" class="active" data-tab-content>
    <div class='container position-relative'>
      <div class='row col-6 mt-5 mx-auto main-row py-5'>
        <h1 class='py-5 text-center'>Fast Food chez Joe</h1>
        <h4 class='text-center'></h4>
      </div>
    </div>
  </div>`;
  container.appendChild(home);
})();

export default renderHome;