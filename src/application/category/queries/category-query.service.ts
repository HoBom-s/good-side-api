import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GetCategoryUseCase } from '../use-cases/get-category.use-case';
import { CategoryResponse } from 'src/\bdomain/category/dto/response-category.dto';
import { BaseCategoryRepository } from 'src/\bdomain/category/repositories/base-category.repository';

@Injectable()
export class CategoryQueryService implements GetCategoryUseCase {
  constructor(
    @Inject('BaseCategoryRepository')
    private readonly categoryRepository: BaseCategoryRepository,
  ) {}

  public async getById(id: number): Promise<CategoryResponse> {
    const found = await this.categoryRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Cannot find category ${id}}`);
    }

    return found;
  }
}
