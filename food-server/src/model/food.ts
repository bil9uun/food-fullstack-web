import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    require: [true, "Hoolnii neriig zaaval oruulna"],
    unique: true,
    maxlength: [50, "Hoolnii nernii urt 50 temdegtees hetrehgui baina"],
  },
  price: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  isSale: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    require: [true, "Hoolnii tailbariig zaaval oruulna"],
  },
  image: { type: String, default: "no-food-photo" },
  category: {
    type: Schema.ObjectId,
    ref: "Category",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Model = model("Food", foodSchema);
export default Model;
