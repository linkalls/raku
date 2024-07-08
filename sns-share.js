class XShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const url = encodeURIComponent(document.location.href);
    const title = encodeURIComponent(document.title);
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${title}%0A${url}`;

    shadow.innerHTML = `
      <link rel="stylesheet" href="raku.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <div class="social-icons">
        <a href="${twitterShareUrl}" target="_blank" aria-label="Share on Twitter">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    `;
  }
}

class NormalShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const url = encodeURIComponent(document.location.href);
    const title = encodeURIComponent(document.title);

    // シャドウDOMの内部HTMLを設定
    shadow.innerHTML = `
      <link rel="stylesheet" href="raku.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <style>button {
      background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0;
  margin-top: -15px; 
  margin-left: -10px; 
      }</style>
      <div class="social-icons">
        <button aria-label="Share">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    `;

    // クリックイベントリスナーを追加
    this.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: document.title, // 元のタイトルを使用
          text: `${document.title}\n${document.location.href}`, // タイトル、改行、URLの形式でテキストを設定
        }).then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    });
  }
}

class FShare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const url = encodeURIComponent(document.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

    shadow.innerHTML = `
      <link rel="stylesheet" href="raku.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <div class="social-icons">
        <a href="${facebookShareUrl}" target="_blank" aria-label="Share on Facebook">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    `;
  }
}




customElements.define("normal-share", NormalShare);
customElements.define("x-share", XShare);
customElements.define("f-share", FShare); 
