import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty({
    description : 'The User Email',
    required : true,
    type : String
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
    @ApiModelProperty({
    description : 'The User Password',
    required : true,
    type : String
  })
  readonly password: string;
}
