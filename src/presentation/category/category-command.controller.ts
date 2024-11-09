import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCategoryRequest } from 'src/\bdomain/category/dto/create-category.dto';
import { CreateCategoryUseCase } from 'src/application/category/use-cases/crecate-category.use-case';

@Controller('/good-side/category')
export class CategoryCommandController {
  constructor(
    @Inject('CreateCategoryUseCase')
    private readonly categoryCommandService: CreateCategoryUseCase,
  ) {}

  @Post()
  public async createCategory(@Body() command: CreateCategoryRequest) {
    await this.categoryCommandService.create(command);
  }
}
