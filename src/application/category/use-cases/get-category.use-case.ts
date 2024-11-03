import { CategoryResponse } from 'src/\bdomain/category/dto/response-category.dto';

export interface GetCategoryUseCase {
  getById(id: number): Promise<CategoryResponse>;
}
