import { Document } from 'mongoose';

export interface Student extends Document {
  name: string;
  // Add other properties here
}
