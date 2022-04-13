class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div style="display: flex;">
    
    <div>
        <a href="index.html">
            <img src="logo.jpg" class="logo"/>
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
    
    `;
  }
}

customElements.define("header-component", Header);
