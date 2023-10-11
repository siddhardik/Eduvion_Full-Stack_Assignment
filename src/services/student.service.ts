import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
