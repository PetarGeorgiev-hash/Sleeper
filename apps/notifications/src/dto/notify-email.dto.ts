import { IsEmail, IsString } from "class-validator";

export class NotifyDto{
    @IsEmail()
    email: string;

    @IsString()
    text: string;
}