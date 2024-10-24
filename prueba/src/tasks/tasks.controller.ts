import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateStateDto, UpdateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAll() {
      return this.tasksService.getTasks()
    }

    // @Get('/:id')
    // getById(@Param('id', ParseIntPipe) id: number) {
    //   return this.tasksService.getTaskById(id)
    // }

    // @Post()
    // create(@Body() task: CreateTaskDto) {
    //   return this.tasksService.createTask(task)
    // }

    // @Put('/:id')
    // update(@Param('id', ParseIntPipe) id: number, @Body() task: UpdateTaskDto) {
    //   return this.tasksService.updateTask(id, task)
    // }

    // @Delete('/:id')
    // delete(@Param('id') id: string) {
    //   return this.tasksService.deleteTask(id)
    // }

    // @Patch('/:id')
    // updateStatus(@Param('id', ParseIntPipe) id: number, @Body() task: UpdateStateDto) {
    //   this.tasksService.updateStatusTask(id, task)
    // }
}
