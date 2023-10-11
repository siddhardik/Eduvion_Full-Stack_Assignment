import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './transaction.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) {}

  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async reconcileTransaction(id: string): Promise<string> {
    // Logic for reconciling a transaction
    return `Transaction with ID ${id} reconciled successfully.`;
  }
}
