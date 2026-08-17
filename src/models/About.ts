import { Schema, model, Document } from "mongoose";

export interface IAboutValue {
  title: string;
  desc: string;
  icon: string;
}

export interface IAboutTimelineItem {
  year: string;
  title: string;
  desc: string;
  image: string;
}

export interface IAbout extends Document {
  storyImage: string;
  storyParagraphs: string[];
  values: IAboutValue[];
  timeline: IAboutTimelineItem[];
  updatedAt: Date;
}

const valueSchema = new Schema<IAboutValue>(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const timelineItemSchema = new Schema<IAboutTimelineItem>(
  {
    year: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { _id: false }
);

const aboutSchema = new Schema<IAbout>(
  {
    storyImage: { type: String, default: "" },
    storyParagraphs: [{ type: String }],
    values: [valueSchema],
    timeline: [timelineItemSchema],
  },
  {
    timestamps: true,
  }
);

export const About = model<IAbout>("About", aboutSchema);
