import { Category } from '../\bentities/category.entity';
import { CreateCategoryRequest } from '../dto/create-category.dto';

export interface BaseCategoryRepository {
  create(category: CreateCategoryRequest);

  findOne(id: number): Promise<Category | null>;
}
