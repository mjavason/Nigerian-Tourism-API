import { Document, Types } from 'mongoose';

// Define the interface
export default interface ITourism extends Document {
  _id?: string | Types.ObjectId;
  name: string;
  state: string;
  description: string;
  image_url: string;
  google_map_url: string;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
