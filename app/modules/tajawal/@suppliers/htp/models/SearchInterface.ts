import { Document, Schema, Model, model } from "mongoose";

export interface SearchInterface extends Document {
    request: string;
    createdAt: string;
    updatedAt: string;
}
