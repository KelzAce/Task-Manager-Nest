import { IsEnum, IsOptional, IsString } from 'class-validators';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
