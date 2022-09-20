const products = [
  {
    "id": 1,
    "title": "Escuadra",
    "price": 200,
    "thumbnail": "www.prueba.com"
  },
  {
    "id": 2,
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://micalculadoracientifica.com/wp-content/uploads/2021/01/TI-Nspire-CX-Amazon.jpg"
  },
  {
    "id": 3,
    "title": "Globo Terráqueo",
    "price": 45.67,
    "thumbnail": "https://panamericana.vteximg.com.br/arquivos/ids/256800-600-690/globo-terraqueo-politico-40-cm-7701016736787.jpg?v=636381897120030000"
  },
  {
    "id": 4,
    "title": "Paleta Pintura",
    "price": 456.78,
    "thumbnail": "https://www.botiga.com.uy/media/catalog/product/cache/1/image/600x600/0dc2d03fe217f8c83829496872af24a0/p/a/paleta_pintora_tempera_infantozzi_materiales.jpg"
  },
  {
    "id": 5,
    "title": "Reloj",
    "price": 67.89,
    "thumbnail": "https://us.123rf.com/450wm/monticello/monticello1911/monticello191100379/135078958-reloj-de-pared-aislado-sobre-fondo-blanco-nueve-.jpg?ver=6"
  },
  {
    "id": 6,
    "title": "Papelera",
    "price": 200,
    "thumbnail": "www.prueba.com"
  }
]

class Products {

  constructor() {
    this.products = products
  }

  getAll() {
    return this.products
  }

  getById(id) {
    const product = this.products.find((product) => product.id === +(id));

    if (product) {
      return product
    } else {
      return { error: 'Product not found' }
    }

  }

  save(newProductParam) {
    const { title, price, thumbnail } = newProductParam;
    if (title != null && price != null && thumbnail != null) {
      const newProduct = {
        id: this.products.length + 1,
        title,
        price,
        thumbnail,
      };
      this.products.push(newProduct);
      return {
        message: "Created",
        product: newProduct,
      }
    } else {
      return {
        message: "Bad Request",
        error: "Incorrect format"
      }
    }

  }

  updateById(id, product) {

    const { title, price, thumbnail } = product;

    if (title != null && price != null && thumbnail != null) {

      let productsUpdate = this.products.map((p) => p.id === id ? p = {
        id,
        title,
        price,
        thumbnail
      } : p);

      this.products = productsUpdate

      return { message: 'Updated successfully' }
    } else {
      return {
        message: "Bad Request",
        error: "Incorrect format"
      }
    }

  }

  deleteById(id) {
    let newProducts = this.products.filter(item => item.id != +(id))
    this.products = newProducts
    return { message: 'Deleted successfully' }
  }
}

module.exports = Products