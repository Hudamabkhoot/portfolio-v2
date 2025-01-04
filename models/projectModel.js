import {Schema, model, models} from 'mongoose';

// Define the schema for a project
const projectSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desEn: {
      type: String,
      required: true,
      trim: true,
    },
    desAr: {
      type: String,
      required: true,
      trim: true,
    },
    tools: {
      type: [String],
      required: true,
    },
    liveLink: {
        type: String,
        required: false,
      },
      githubLink: {
        type: String,
        required: false,
      },
  },
  {
    timestamps: true,
  }
);

const projectModal = models.project || model('project', projectSchema);

export default projectModal;
