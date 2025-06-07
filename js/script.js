const productos = [
  { nombre: "Cofi Reserva", precio: "$20.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Reserva" },
  { nombre: "Cofi Clásico", precio: "$18.500", img: "../assets/images/producto.jpg", alt: "Café Cofi Clásico" },
  { nombre: "Cofi Intenso", precio: "$21.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Intenso" },
  { nombre: "Cofi Orgánico", precio: "$22.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Orgánico" },
  { nombre: "Cofi Reserva", precio: "$20.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Reserva" },
  { nombre: "Cofi Clásico", precio: "$18.500", img: "../assets/images/producto.jpg", alt: "Café Cofi Clásico" },
  { nombre: "Cofi Intenso", precio: "$21.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Intenso" },
  { nombre: "Cofi Orgánico", precio: "$22.000", img: "../assets/images/producto.jpg", alt: "Café Cofi Orgánico" }
];

const productList = document.getElementById('product-list');

productos.forEach(producto => {
  const col = document.createElement('article');
  col.className = 'col-6 col-md-4 col-lg-3 product text-center';

  col.innerHTML = `
      <img class="product__image" src="${producto.img}" alt="${producto.alt}" />
      <h2 class="product__name">${producto.nombre}</h2>
      <p class="product__price">${producto.precio}</p>
      <button class="product__button" aria-label="Ver detalles de ${producto.nombre}">Vista rápida</button>
    `;

  productList.appendChild(col);
});

const productListC = document.getElementById('product-list-cafeteras');

productos.forEach(producto => {
  const col = document.createElement('article');
  col.className = 'col product text-center';

  col.innerHTML = `
      <img class="product__image" src="${producto.img}" alt="${producto.alt}" />
      <h2 class="product__name">${producto.nombre}</h2>
      <p class="product__price">${producto.precio}</p>
      <button class="product__button" aria-label="Ver detalles de ${producto.nombre}">Vista rápida</button>
    `;

  productListC.appendChild(col);
});

const productListM = document.getElementById('product-list-molinillos');

productos.forEach(producto => {
  const col = document.createElement('article');
  col.className = 'col product text-center';

  col.innerHTML = `
      <img class="product__image" src="${producto.img}" alt="${producto.alt}" />
      <h2 class="product__name">${producto.nombre}</h2>
      <p class="product__price">${producto.precio}</p>
      <button class="product__button" aria-label="Ver detalles de ${producto.nombre}">Vista rápida</button>
    `;

  productListM.appendChild(col);
});
