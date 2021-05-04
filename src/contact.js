const contactPage = (() => {
  const contentContainer = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.classList.add('container-fluid');
  contact.setAttribute('id', 'contact');
  contact.setAttribute('data-tab-content', '');
  contact.innerHTML = `
  <h1 class='text-center text-light'>Contact Us</h1>
  <div class='col-10 col-md-6 mx-auto row d-flex flex-column contact-row'>
    <div class='col-6 mx-auto'>
      <p class='my-4'>Phone: +964 770 8272458</p>
      <a href="mailto:arikarim146@gmail.com" class='my-2 text-decoration-none link-dark'>Email: arikarim146@gmail.com</a>
    </div>

    <div class="col-6 mx-auto my-5">
        <form onsubmit="return false">
          <h3><i class=""></i>Message us</h3>
          <div class="">
            <span>Name</span><br>
            <input class='form-control'  type="text" required />
          </div>
          <div class="my-3">
            <span>Email</span><br>
            <input class='form-control' type="text" required />
          </div>
          <div class="my-3">
            <span>Type your message...</span><br>
            <textarea class='form-control'  required></textarea>
          </div>
          <input class='btn btn-dark my-3' type="submit" value="Send" />
        </form>
      </div>
  </div>`;

  contentContainer.appendChild(contact);
})();

export default contactPage;