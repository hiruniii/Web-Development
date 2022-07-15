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
                  <a class="nav-link prod-link" href="products.html">
                    Our Products
                  </a>

                  <ul class="prod-dropdown">         
                    <li>Highland Pasteurized Milk</li>
                    <li>Highland Sterilized Milk</li>
                    <li>Highland Yoghurt</li>
                    <li>Highland Curd</li>
                    <li>Highland Butter</li>
                  </ul>
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

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    
    <iframe 
      class="footer-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9786785520496!2d79.87855071744384!3d6.893153500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2eaf1a7e77%3A0x6fd1e37320977406!2sMILCO%20Private%20Limited!5e0!3m2!1sen!2slk!4v1657886256092!5m2!1sen!2slk"  
      allowfullscreen="" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <div class="bottom-nav">
      <div><a href="./index.html" >Home</a></div>
      <div><a href="./products.html" >Our Products</a></div>
      <div><a href="./factories.html" >Factories</a></div>
      <div><a href="./outlets.html" >Sales Outlets</a></div>
      <div><a href="./contact.html" >Contact</a></div>
    </div>

    <div class="contact">
      <table>
        <tr>
          <td>
              <a target="_blank" href="https://www.facebook.com/milcohighland/">
                <img src="./images/icons/icons8-facebook.png" />
              </a>
          </td>
          <td>@milcohighland</td>
        </tr>

        <tr>
          <td>
              <a target="_blank" href="https://twitter.com/HighlandLK">
                <img src="./images/icons/icons8-twitter.png" />
              </a>
          </td>
          <td>@HighlandLK</td>
        </tr>

        <tr>
          <td>
            <a href="mailto:info@milco.lk">
              <img src="./images/icons/icons8-mail.png" class="footer-icon" />
            </a>
          </td>
          <td>info@milco.lk</td>
        </tr>

        <tr>
          <td><img src="./images/icons/icons8-phone.png" class="footer-icon" /></td>
          <td>(+94) 112 582331-4</td>
        </tr>

        <tr>
          <td><img src="./images/icons/icons8-fax.png" class="footer-icon" style="margin-right: 1rem" /></td>
          <td>(+94) 112 368082<br />
            (+94) 115 333328
          </td>
        </tr>

        <tr>
          <td><img src="./images/icons/icons8-house.png" class="footer-icon" style="margin-right: 1rem" /></td>
          <td>Milco (Pvt) Ltd, No: 45, Nawala Road,Narahenpita Colombo 05, Sri Lanka
          </td>
        </tr>

      </table>
    </div>

    <div class="copyright">
      © 2006 Milco Private Limited. All Rights Reserved © 2008
    </div>

  </footer>
    `;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);