import { IsOptional } from "class-validator";

export class PaginationDTO {
  @IsOptional()
  page?: number;

  @IsOptional()
  rowsPerPage?: number;
}
