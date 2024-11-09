import { Category } from '../\bentities/category.entity';

interface Response {
  id: number;
  title: string;
  path: string;
  sortIdx: number;
  createdAt: Date;
  updatedAt: Date;
}

export class CategoryResponse {
  readonly id: number;
  readonly title: string;
  readonly path: string;
  readonly sortIdx: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor({ id, title, path, sortIdx, createdAt, updatedAt }: Response) {
    this.id = id;
    this.title = title;
    this.path = path;
    this.sortIdx = sortIdx;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static from(category: Category): CategoryResponse {
    return new CategoryResponse({
      id: category.id,
      title: category.title,
      path: category.path,
      sortIdx: category.sortIdx,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    });
  }
}
