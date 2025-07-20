import { IsEmail } from "class-validator";

export class NotifyDto{
    @IsEmail()
    email: string;
}