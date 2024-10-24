import {IsString, IsNotEmpty} from 'class-validator'

export class UpdateTaskDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  status?: string;
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
