interface CreateCategory {
  title: string;
  path: string;
  sortIdx: number;
}

export class CreateCategoryRequest {
  readonly title: string;
  readonly path: string;
  readonly sortIdx: number;

  constructor({ title, path, sortIdx }: CreateCategory) {
    this.title = title;
    this.path = path;
    this.sortIdx = sortIdx;
  }
}
