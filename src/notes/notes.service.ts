import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Notes } from 'src/database/entities/notes.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private tasksRepository: Repository<Notes>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    return this.tasksRepository.insert(createNoteDto)
  }

  findAll(): Promise<Notes[]> {
    return this.tasksRepository.find({
      where: {
        TaskId: 3
      },
      select: [
        "description"
      ],
      relations: [
        ""
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
