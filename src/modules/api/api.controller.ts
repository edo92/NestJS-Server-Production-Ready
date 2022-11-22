import { Body, Controller, Post, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { RequestDto, ResponseDto } from "./api.dto";
import { ApiService } from "./api.service";

@ApiTags("endpoint")
@Controller("endpoint")
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post("create")
  @ApiResponse({
    status: 201,
    type: ResponseDto,
    description: "Create api data",
  })
  public async create(@Body() body: RequestDto): Promise<ResponseDto> {
    return this.apiService.createData(body);
  }

  @Get("get")
  @ApiResponse({
    status: 200,
    type: ResponseDto,
    description: "Get api data",
  })
  public async get(): Promise<ResponseDto> {
    console.log("---------->Incoming request")
    return this.apiService.getData();
  }
}
