import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    require: true,
  },
  foods: [
    {
      food: { type: Schema.ObjectId, ref: "Food" },
      count: Number,
    },
  ],
  totalPrice: { type: Number, require: true },
});

const Basket = model("Basket", basketSchema);
export default Basket;
