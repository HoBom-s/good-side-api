import { CreateCategoryRequest } from 'src/\bdomain/category/dto/create-category.dto';

export interface CreateCategoryUseCase {
  create(command: CreateCategoryRequest);
}
