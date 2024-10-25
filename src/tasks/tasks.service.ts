import { Injectable } from '@nestjs/common';
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

  getTaskById(id: number): Promise<Task | null> {
    return this.tasksRepository.findOneBy({id})
  }

  createTask(task: CreateTaskDto) {
    return this.tasksRepository.insert(task)
  }

  updateTask(id: number, task: UpdateTaskDto) {
    return this.tasksRepository.update(id, task)
  }

  async deleteTask(id: number): Promise<void> {
   await this.tasksRepository.delete(id)
  }

  updateStatusTask(id: number, task: UpdateStateDto) {
    return this.tasksRepository.update(id, task)
  }
}
