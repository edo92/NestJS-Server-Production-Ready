import { IsString } from "class-validator";

export class RequestDto {
  @IsString()
  data: string;
}

export class ResponseDto {
  @IsString()
  data: string;
}
