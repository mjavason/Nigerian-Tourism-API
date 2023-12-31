import { Schema, model } from 'mongoose';
import IUser from '../../interfaces/user.interface';
import { DATABASES } from '../../constants';

const UserSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      required: true,
    },
    language: {
      type: String,
      enum: [
        'chinese',
        'english',
        'french',
        'hausa',
        'hindi',
        'igbo',
        'italian',
        'japanese',
        'korean',
        'russian',
        'spanish',
        'yoruba',
      ],
      required: false,
      default: 'english',
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    confirmed: {
      type: Schema.Types.Boolean,
      required: false,
      select: false,
      default: false,
    },
    deleted: {
      type: Schema.Types.Boolean,
      required: false,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model<IUser>(DATABASES.USER, UserSchema);

export default UserModel;
