import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryUseCase } from '../use-cases/crecate-category.use-case';
import { CreateCategoryRequest } from 'src/\bdomain/category/dto/create-category.dto';
import { BaseCategoryRepository } from 'src/\bdomain/category/repositories/base-category.repository';

@Injectable()
export class CategoryCommandService implements CreateCategoryUseCase {
  constructor(
    @Inject('BaseCategoryRepository')
    private readonly categoryRepository: BaseCategoryRepository,
  ) {}

  public async create(command: CreateCategoryRequest) {
    await this.categoryRepository.create(command);
  }
}
