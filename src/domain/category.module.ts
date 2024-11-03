import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/\bentities/category.entity';
import { CategoryRepository } from './category/repositories/category.repository';
import { CategoryCommandService } from 'src/application/category/commands/category-command.service';
import { CategoryQueryService } from 'src/application/category/queries/category-query.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryCommandService, CategoryQueryService],
  providers: [
    {
      provide: 'BaseCategoryRepository',
      useClass: CategoryRepository,
    },
    {
      provide: 'CreateCategoryUseCase',
      useClass: CategoryCommandService,
    },
    {
      provide: 'GetCategoryUseCase',
      useClass: CategoryQueryService,
    },
  ],
  exports: [
    'BaseCategoryRepository',
    'CreateCategoryUseCase',
    'GetCategoryUseCase',
  ],
})
export class CategoryModule {}
