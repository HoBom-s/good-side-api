import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CategoryResponse } from 'src/\bdomain/category/dto/response-category.dto';
import { GetCategoryUseCase } from 'src/application/category/use-cases/get-category.use-case';

@Controller('/good-side/category')
export class CategoryQueryController {
  constructor(
    @Inject('GetCategoryUseCase')
    private readonly categoryQuerydService: GetCategoryUseCase,
  ) {}

  @Get(':id')
  public async createCategory(
    @Param('id') id: number,
  ): Promise<CategoryResponse> {
    return await this.categoryQuerydService.getById(id);
  }
}
