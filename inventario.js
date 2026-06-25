var productos = [
  { id: 1, nombre: "Laptop Pro 15", precio: 1200.00, categoria: "Tecnología", stock: 15 },
  { id: 2, nombre: "Smartphone 5G", precio: 799.99, categoria: "Tecnología", stock: 30 },
  { id: 3, nombre: "Auriculares Bluetooth", precio: 89.99, categoria: "Audio", stock: 50 },
  { id: 4, nombre: "Monitor Gamer 27'", precio: 299.99, categoria: "Tecnología", stock: 12 },
  { id: 5, nombre: "Teclado Mecánico", precio: 65.50, categoria: "Accesorios", stock: 25 },
  { id: 6, nombre: "Mouse Óptico Inalámbrico", precio: 25.00, categoria: "Accesorios", stock: 40 },
  { id: 7, nombre: "Cafetera de Goteo", precio: 45.99, categoria: "Hogar", stock: 20 },
  { id: 8, nombre: "Licuadora de Alta Potencia", precio: 85.00, categoria: "Hogar", stock: 18 },
  { id: 9, nombre: "Freidora de Aire", precio: 110.00, categoria: "Hogar", stock: 10 },
  { id: 10, nombre: "Silla Ergonómica", precio: 180.00, categoria: "Oficina", stock: 8 },
  { id: 11, nombre: "Escritorio Elevable", precio: 350.00, categoria: "Oficina", stock: 5 },
  { id: 12, nombre: "Mochila para Laptop", precio: 40.00, categoria: "Moda", stock: 35 },
  { id: 13, nombre: "Reloj Inteligente (Smartwatch)", precio: 150.00, categoria: "Tecnología", stock: 22 },
  { id: 14, nombre: "Cargador Carga Rápida", precio: 19.99, categoria: "Accesorios", stock: 60 },
  { id: 15, nombre: "Altavoz Inteligente", precio: 49.99, categoria: "Audio", stock: 15 },
  { id: 16, nombre: "Zapatillas Deportivas", precio: 75.00, categoria: "Moda", stock: 14 },
  { id: 17, nombre: "Camiseta de Algodón", precio: 15.99, categoria: "Moda", stock: 100 },
  { id: 18, nombre: "Pantalón Jean Clásico", precio: 35.50, categoria: "Moda", stock: 45 },
  { id: 19, nombre: "Botella de Agua Térmica", precio: 22.00, categoria: "Deportes", stock: 30 },
  { id: 20, nombre: "Set de Mancuernas 10kg", precio: 55.00, categoria: "Deportes", stock: 12 },
  { id: 21, nombre: "Lámpara de Escritorio LED", precio: 28.99, categoria: "Oficina", stock: 19 },
  { id: 22, nombre: "Disco Duro Externo 1TB", precio: 60.00, categoria: "Tecnología", stock: 25 },
  { id: 23, nombre: "Proyector Portátil Mini", precio: 199.99, categoria: "Tecnología", stock: 7 },
  { id: 24, nombre: "Cámara de Seguridad Wi-Fi", precio: 45.00, categoria: "Hogar", stock: 16 },
  { id: 25, nombre: "Trípode para Celular", precio: 18.50, categoria: "Accesorios", stock: 50 }
];

productos.forEach(function(elem, i){
    console.log(`arrayMixto[${i}] = ${elem}`)
});