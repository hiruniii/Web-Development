class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div style="display: flex;">
    
    <div>
        <a href="index.html">
            <img src="logo.png" class="logo"/>
        </a>
    </div>

    <div class="navbar-light">
        <nav>
            <ul class="navbar-ul">
                <li>
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li>
                    <a class="nav-link" href="products.html">Our Products</a>
                </li>
                <li>
                    <a class="nav-link" href="factories.html">Factories</a>
                </li>
                <li>
                    <a class="nav-link" href="outlets.html">Sales Outlets</a>
                </li>
                <li>
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</div>
        `;
  }
}

class Footer extends HTMLElement{
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <div></div>

    <div></div>

    <div class="contact">
      <table>
        <tr>
          <td>
              <a target="_blank" href="https://www.facebook.com/milcohighland/">
                <img src="icons8-facebook.png" />
              </a>
          </td>
          <td>@milcohighland</td>
        </tr>

        <tr>
          <td>
            <a href="mailto:info@milco.lk">
              <img src="icons8-mail.png" class="footer-icon" />
            </a>
          </td>
          <td>info@milco.lk</td>
        </tr>

        <tr>
          <td><img src="icons8-phone.png" class="footer-icon" /></td>
          <td>(+94) 112 582331-4</td>
        </tr>

        <tr>
          <td><img src="icons8-fax.png" class="footer-icon" style="margin-right: 1rem" /></td>
          <td>(+94) 112 368082<br />
            (+94) 115 333328
          </td>
        </tr>

        <tr>
          <td><img src="icons8-house.png" class="footer-icon" style="margin-right: 1rem" /></td>
          <td>Milco (Pvt) Ltd, No: 45, Nawala Road,Narahenpita Colombo 05, Sri Lanka
          </td>
        </tr>

      </table>
    </div>

  </footer>
    `;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);