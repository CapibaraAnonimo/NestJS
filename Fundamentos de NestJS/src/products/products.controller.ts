import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

interface Prduct {
  name: string;
  amount: number;
}

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts(@Query('name') name: string) {
    if (name) {
      return `Este método devuelve todos los productos filtrados por nombre según la query: ${name}`;
    }
    return 'Este método devuelve todos los productos';
  }

  /*  @Get()
    getProductsFilterByName(@Query('name') name: string) {
      return `Este método devuelve todos los productos filtrados por nombre según la query: ${name}`;
    }*/

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return `Este método devuelve el producto con id: ${id}`;
  }

  @Post()
  postAllProducts(@Body() product: Prduct) {
    console.log(product);
    return 'Este método crea un producto';
  }

  @Put(':id')
  putAllProducts(@Param('id') id: string, @Body() product: Prduct) {
    console.log(product);
    return `Este método remplaza un producto con id: ${id}`;
  }

  @Patch(':id')
  patchAllProducts(@Param('id') id: string, @Body() product: Prduct) {
    console.log(product);
    return `Este método remplaza parcialmente un producto con id ${id}`;
  }

  @Delete(':id')
  deleteAllProducts(@Param('id') id: string) {
    return `Este método elimina un producto con el id: ${id}`;
  }
}
