import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { WarehousesController } from './warehouses/warehouses.controller';
import { ProvidersController } from './providers/providers.controller';
import { Products } from './products/products';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [ProductsController, WarehousesController, ProvidersController],
  providers: [Products, ProductsService],
})
export class AppModule {}
