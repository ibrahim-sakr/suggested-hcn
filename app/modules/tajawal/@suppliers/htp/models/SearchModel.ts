import { Schema, Model, model } from "mongoose";
import { SearchInterface } from "./SearchInterface";

export const SearchSchema: Schema = new Schema({
    createdAt: Date,
    email: String,
});

SearchSchema.pre("save", function (next) {
    let now = new Date();

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

export const HTPSearch: Model<SearchInterface> = model<SearchInterface>("htp_search", SearchSchema);
