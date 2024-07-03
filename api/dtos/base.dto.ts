import { IsOptional, IsUUID } from "class-validator";

export class BaseDTO {
  @IsUUID()
  @IsOptional()
  id?: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
