import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTimeStampEntity {
  @CreateDateColumn({ default: () => new Date() })
  createdAt: Date;

  @UpdateDateColumn({ default: () => new Date() })
  updatedAt: Date;
}
