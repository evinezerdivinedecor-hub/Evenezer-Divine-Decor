<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Evinezer Divine Decor</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Hidden static Netlify form for detection -->
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input type="hidden" name="form-name" value="contact" />
    <p style="display:none">
      <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <input name="name" />
    <input name="email" />
    <input name="phone" />
    <textarea name="message"></textarea>
  </form>

  <header class="site-header">
    <div class="container header-grid">
      <div class="brand-block">
        <a href="/" class="brand-link">
          <img src="assets/images/brand_logo.jpg" alt="Evinezer Divine Decor" class="brand-logo" />
          <div class="brand-text">
            <h1 class="brand">Evinezer Divine Decor</h1>
            <div class="contact-info">Call us: +91-9945699004 &nbsp;|&nbsp; WhatsApp: +91-9945690003</div>
          </div>
        </a>
      </div>

      <div class="controls">
        <input id="search" placeholder="Search products or tags..." />
        <select id="sort">
          <option value="">Sort</option>
          <option value="price-asc">Price: low → high</option>
          <option value="price-desc">Price: high → low</option>
          <option value="name-asc">Name A→Z</option>
        </select>
        <button id="contactBtn" class="btn">Contact</button>
        <button id="cartBtn" class="btn">Cart (<span id="cartCount">0</span>)</button>
      </div>
    </div>
  </header>

  <main>
    <section class="container">
      <div id="products" class="grid" aria-live="polite"></div>
    </section>
  </main>

  <!-- Cart Modal -->
  <div id="cartModal" class="modal" aria-hidden="true">
    <div class="modal-content">
      <h3>Your Cart</h3>
      <div id="cartItems" class="cart-list"></div>
      <div class="cart-footer">
        <div id="cartTotal" class="cart-total"></div>
        <div class="cart-actions">
          <button id="checkoutBtn" class="btn">Checkout</button>
          <button id="closeCart" class="btn">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Modal (visible) -->
  <div id="contactModal" class="modal" aria-hidden="true">
    <div class="modal-content">
      <h3>Contact us</h3>
      <form id="contactForm" name="contact" method="POST" data-netlify="true" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p style="display:none">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <label>Name</label>
        <input name="name" required />
        <label>Email</label>
        <input name="email" type="email" required />
        <label>Phone</label>
        <input name="phone" type="tel" />
        <label>Message</label>
        <textarea name="message" rows="4" required></textarea>

        <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end">
          <button type="submit" class="btn">Send</button>
          <button type="button" id="closeContact" class="btn">Close</button>
        </div>
        <div id="formStatus" style="margin-top:10px"></div>
      </form>
    </div>
  </div>

  <!-- Inline product data (defensive) -->
  <script>
  const PRODUCTS_DATA = [
    {"name":"Santa in Car with Light","sku":"A100","description":"Festive santa car ornament","tags":["christmas","decor"],"price":1299,"quantity":3,"image":"assets/images/Santa in Car with Light.jpg"},
    {"name":"Santa in Chair with Light","sku":"A101","description":"Santa seated chair","tags":["christmas"],"price":1199,"quantity":4,"image":"assets/images/Santa in Chair with Light.jpg"},
    {"name":"Wine Bag","sku":"A102","description":"Gift wine bag","tags":["gift"],"price":649,"quantity":10,"image":"assets/images/Wine Bag.jpg"},
    {"name":"Gift Box","sku":"A103","description":"Decorative gift box","tags":["gift","box"],"price":499,"quantity":6,"image":"assets/images/Gift Box.jpg"},
    {"name":"Snow Man White","sku":"A104","description":"White snowman ornament","tags":["snowman"],"price":999,"quantity":7,"image":"assets/images/Snow Man White.jpg"},
    {"name":"Hanging Colourfull Grapes","sku":"A105","description":"Colorful hanging grapes","tags":["decor"],"price":349,"quantity":12,"image":"assets/images/Hanging Colourfull Grapes.jpg"},
    {"name":"Angel Wings","sku":"A106","description":"Decorative angel wings","tags":["angel"],"price":399,"quantity":8,"image":"assets/images/Angel Wings.jpg"},
    {"name":"Snow Man Red","sku":"A107","description":"Red snowman ornament","tags":["snowman"],"price":899,"quantity":6,"image":"assets/images/Snow Man Red.jpg"},
    {"name":"Cherry Wreath","sku":"A108","description":"Decorative cherry wreath","tags":["wreath"],"price":749,"quantity":3,"image":"assets/images/Cherry Wreath.jpg"},
    {"name":"Red Velvet Balls","sku":"A109","description":"Red velvet balls set","tags":["ornament"],"price":249,"quantity":20,"image":"assets/images/Red Velvet Balls.jpg"},
    {"name":"Santa Snow Globe","sku":"A110","description":"Snow globe with santa","tags":["globe"],"price":1299,"quantity":4,"image":"assets/images/Santa Snow Globe.jpg"},
    {"name":"Small Snowman hanging","sku":"A111","description":"Small hanging snowman","tags":["snowman"],"price":299,"quantity":15,"image":"assets/images/Small Snowman hanging.jpg"},
    {"name":"Jewel Box","sku":"A112","description":"Decorative jewel box","tags":["box","jewel"],"price":899,"quantity":5,"image":"assets/images/Jewel Box.jpg"},
    {"name":"X-Mas Light House","sku":"A113","description":"Christmas light house","tags":["light","decor"],"price":1099,"quantity":3,"image":"assets/images/X-Mas Light House.jpg"},
    {"name":"Huge White Socks","sku":"A114","description":"Large white socks","tags":["socks"],"price":399,"quantity":9,"image":"assets/images/Huge white socks.jpg"},
    {"name":"Snowballs Small","sku":"A115","description":"Small snowballs pack","tags":["snow"],"price":199,"quantity":25,"image":"assets/images/Snowballs Small.jpg"},
    {"name":"Glass Balls with Cherry","sku":"A116","description":"Glass balls with cherry","tags":["glass"],"price":349,"quantity":10,"image":"assets/images/Glass Balls with Cherry.jpg"},
    {"name":"Jingle Bells Red","sku":"A117","description":"Red jingle bells","tags":["bells"],"price":149,"quantity":30,"image":"assets/images/Jingle Bells red.jpg"},
    {"name":"Velvet Tree","sku":"A118","description":"Velvet Christmas tree","tags":["tree"],"price":899,"quantity":3,"image":"assets/images/Velvet Tree.jpg"},
    {"name":"Wooden Hanging Circle","sku":"A119","description":"Wooden hanging circle ornament","tags":["wooden"],"price":449,"quantity":6,"image":"assets/images/Wooden Hanging Circle.jpg"},
    {"name":"Wooden Hanging House","sku":"A120","description":"Wooden hanging house","tags":["wooden","house"],"price":499,"quantity":6,"image":"assets/images/Wooden Hanging House.jpg"},
    {"name":"Wooden Merry Christmas","sku":"A121","description":"Wooden Merry Christmas sign","tags":["wooden","sign"],"price":599,"quantity":4,"image":"assets/images/Wooden Merry Christmas.jpg"}
  ];
  </script>

  <script src="script.js"></script>
</body>
</html>
