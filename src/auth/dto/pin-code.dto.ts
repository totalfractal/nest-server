import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsInt } from "class-validator";
import { ValidationMessage } from "src/exceptions/validation.message";

export class PinCodeDto {
    @IsNotEmpty({message: ValidationMessage.isEmpty})
    @IsInt({message: ValidationMessage.isNumber})
    @ApiProperty({example: '1234', description: 'ПИН-код для аутентификации'})
    readonly pin: number;
}