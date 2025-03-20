(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    satProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      private productService: ProductService = new ProductService(),
      private sendEmail: SendEmail = new SendEmail(),
      private productCard: CardBloc = new CardBloc()
    ) {}

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.satProduct(product);
    }

    addProductOfCard(productId: number) {
      this.productCard.addProductOfCard(productId);
    }

    notifyProductOfClients() {
      this.sendEmail.notifyProductOfClients();
    }
  }

  class SendEmail {
    notifyProductOfClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  class CardBloc {
    addProductOfCard(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productBloc = new ProductBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyProductOfClients();
  productBloc.addProductOfCard(10);
})();
