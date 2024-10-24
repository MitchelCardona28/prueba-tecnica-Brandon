import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateStateDto, UpdateTaskDto } from './dto/tasks.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/database/entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  getTasks(): Promise<Task[]> {
    return this.tasksRepository.find()
  }

  // getTaskById(id: number) {
  //   const foundTask = this.tasks.find(task => task.id === id)

  //   if (!foundTask) {
  //     return new NotFoundException(`Task with id ${id} haven't been found!`).message
  //   }
  //   return foundTask
  // }

  // createTask(task: CreateTaskDto) {
  //   this.tasks.push({
  //     ...task,
  //     id: this.tasks.length + 1
  //   })
  //   return task;
  // }

  // updateTask(id: number, task: UpdateTaskDto) {
  //   const taskIndex = this.tasks.findIndex(task => task.id === id)

  //   if (taskIndex === -1) {
  //     return new NotFoundException(`Cannot update task with id ${id} as it's not been created before!`).message
  //   }

  //   const updatedTask = {
  //     ...this.tasks[taskIndex],
  //     ...task
  //   }

  //   this.tasks[taskIndex] = updatedTask

  //   return this.tasks[taskIndex]
  // }

  // deleteTask(id: string) {
  //   const taskIndex = this.tasks.findIndex(task => task.id.toString() === id)

  //   if (taskIndex === -1) {
  //     return new NotFoundException(`Cannot delete task with id ${id} as it's not been found!`).message
  //   }

  //   this.tasks.splice(taskIndex, 1)

  //   return 'Task deleted succesfully!'
  // }

  // updateStatusTask(id: number, task: UpdateStateDto) {

  // }
}
