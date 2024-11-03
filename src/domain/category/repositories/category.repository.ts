import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCategoryRepository } from './base-category.repository';
import { Category } from '../\bentities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryRequest } from '../dto/create-category.dto';

@Injectable()
export class CategoryRepository implements BaseCategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async create(category: CreateCategoryRequest) {
    await this.categoryRepository.save(category);
  }

  public async findOne(id: number): Promise<Category | null> {
    const found = await this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });

    return found;
  }

  public async findOneByTitle(title: string): Promise<Category | null> {
    const found = await this.categoryRepository.findOne({
      where: {
        title: title,
      },
    });

    return found;
  }
}
