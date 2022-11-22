import { Injectable } from "@nestjs/common";
import { RequestDto, ResponseDto } from "./api.dto";

@Injectable()
export class ApiService {
  public async createData(req: RequestDto): Promise<ResponseDto> {
    return { data: req.data };
  }

  public async getData(): Promise<ResponseDto> {
    return { data: "Hello World!" };
  }
}
