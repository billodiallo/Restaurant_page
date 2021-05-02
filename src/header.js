const headerPage = (() => {
    // container
    const contentContainer = document.querySelector('#content');
  
    const header = document.createElement('header');
    header.innerHTML = `

    <nav class='d-flex justify-content-between bg-dark p-3'>
      <h2 class='red'>FastFood Chez Joe</h2>
      <a href="#" class="hamburger">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </a>
      <ul class="list-unstyled d-flex text-light">
        <li data-tab-target="#home" class="tab red mx-3">Home</li>
        <li id='menuu' data-tab-target="#menu" class="tab mx-3">Menu</li>
        <li data-tab-target="#contact" class="tab mx-3">Contact us</li>
      </ul>
  </nav>`;
  
    contentContainer.appendChild(header);
  })();
  export default headerPage;