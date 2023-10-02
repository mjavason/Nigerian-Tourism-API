import { Schema, model } from 'mongoose';
import { DATABASES } from '../../constants';
import ITourism from '../../interfaces/tourism.interface';

// Define the schema
const tourismSchema = new Schema<ITourism>(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    google_map_url: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Define the model
const TourismModel = model<ITourism>(DATABASES.TOURISM, tourismSchema);

export default TourismModel;
