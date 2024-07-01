import { IsOptional, IsNotEmpty, Min, IsUrl } from "class-validator";
import { BaseDTO } from "./base.dto";

export class LinkDTO extends BaseDTO {
  @IsNotEmpty()
  @IsUrl()
  url!: string;

  @Min(3)
  slug!: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  clicks?: number;

  @IsOptional()
  lastClicked?: Date;
}
