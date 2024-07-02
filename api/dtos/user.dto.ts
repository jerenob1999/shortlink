import { IsNotEmpty, Min, IsEmail, Max } from "class-validator";
import { BaseDTO } from "./base.dto";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @Min(8)
  @Max(20)
  password!: string;
}
