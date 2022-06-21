# segunda_entrega_proyecto
Segunda Entrega del Proyecto Final - Desarrollo Backend


Manejador de productos
GET: '/api/productos' -> Obtener todos los productos
POST: '/api/productos' -> Agregar productos a la base
POST: '/api/carritos/:id carrito/productos' -> Agregar productos a un carrito especifico
DEL: '/api/productos/'id producto' -> Borrar producto
PUT: '/api/productos/ id producto' -> Actualizar un producto


Manejador de carritos
GET: '/id carrito/productos' -> Traigo un carrito especifico
POST: '/api/carritos' -> Crear carrito
GET: '/api/carritos/id carrito/productos -> Obtener carrito especifico
DEL: '/api/carritos/'id carrito/productos' -> Borrar carrito especifico
DEL: '"/:id carrito/productos/:id productos" -> Borrar producto de un carrito