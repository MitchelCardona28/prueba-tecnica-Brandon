import {IsString, IsNotEmpty} from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description?: string;
}

export class UpdateTaskDto extends CreateTaskDto{}

export class UpdateStateDto {
  @IsString()
  @IsNotEmpty()
  status: string;
}
