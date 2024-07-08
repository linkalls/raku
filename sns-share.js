class XShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    // Shadow DOM内に外部CSSファイルをインポート
    shadow.innerHTML = `
    <link rel="stylesheet" href="raku.css">    
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <div class="social-icons">
                <a href="https://twitter.com/" target="_blank"><span class="fab fa-twitter" aria-hidden="true"></span></a>
</div>
  `;
  }
}

class FShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="raku.css">    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <div class="social-icons">
        <a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook" aria-hidden="true"></span></a>
      </div>
    `;
  }
}

class IShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="raku.css">    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <div class="social-icons">
        <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram" aria-hidden="true"></span></a>
      </div>
    `;
  }
}

customElements.define("x-share", XShare);
customElements.define("f-share", FShare);
customElements.define("i-share", IShare);

