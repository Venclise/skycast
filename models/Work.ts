import mongoose, { models, Schema } from "mongoose";

const WorkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stacks: {
      type: [String],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
       category: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Work = models.Work || mongoose.model("Work", WorkSchema);
