import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, } from '@nestjs/common';
import { Prduct } from './product.dto';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {

  }

  @Get()
  getAllProducts(@Query('name') name: string) {
    if (name) {
      return this.productsService.getAllProductsFilterByName(name);
    }
    return this.productsService.getAllProducts();
  }


  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Post()
  postAllProducts(@Body() product: Prduct) {
    console.log(product);
    return this.productsService.postAllProducts(product);
  }

  @Put(':id')
  putAllProducts(@Param('id') id: string, @Body() product: Prduct) {
    console.log(product);
    return this.productsService.putAllProducts(id, product);
  }

  @Patch(':id')
  patchAllProducts(@Param('id') id: string, @Body() product: Prduct) {
    console.log(product);
    return this.productsService.patchAllProducts(id, product);
  }

  @Delete(':id')
  deleteAllProducts(@Param('id') id: string) {
    return this.productsService.deleteAllProducts(id);
  }
}
