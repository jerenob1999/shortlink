import { IsOptional, IsNotEmpty, Min, IsUrl } from "class-validator";
import { BaseDTO } from "./base.dto";

export class LinkDTO extends BaseDTO {
  @IsNotEmpty()
  @IsUrl()
  fullUrl!: string;

  @Min(3)
  shortUrl!: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  clicks?: number;

  @IsOptional()
  lastClicked?: Date;

  @IsNotEmpty()
  userId!: number;
}
