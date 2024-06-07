import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUppercase,
  MaxLength,
  MinLength
} from "class-validator";

export class SendMailDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  @IsUppercase()
  plate: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  parkingName: string;
}
