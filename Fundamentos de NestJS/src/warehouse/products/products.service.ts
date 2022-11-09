import { Injectable } from '@nestjs/common';
import { Prduct } from './product.dto';
import { UsersService } from "../users/users.service";

@Injectable()
export class ProductsService {
  constructor(private readonly userService: UsersService) {
  }

  getAllProducts() {
    return 'Este método devuelve todos los productos';
  }

  getAllProductsFilterByName(name: string) {
    return `Este método devuelve todos los productos filtrados por nombre según la query: ${name}`;
  }

  /*  @Get()
    getProductsFilterByName(@Query('name') name: string) {
      return `Este método devuelve todos los productos filtrados por nombre según la query: ${name}`;
    }*/

  getProductById(id: string) {
    return `Este método devuelve el producto con id: ${id}`;
  }

  postAllProducts(product: Prduct) {
    console.log(product);
    return 'Este método crea un producto';
  }

  putAllProducts(id: string, product: Prduct) {
    console.log(product);
    return `Este método remplaza un producto con id: ${id}`;
  }

  patchAllProducts(id: string, product: Prduct) {
    console.log(product);
    return `Este método remplaza parcialmente un producto con id ${id}`;
  }

  deleteAllProducts(id: string) {
    return `Este método elimina un producto con el id: ${id}`;
  }
}
