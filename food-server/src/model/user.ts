import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const orderSchema = new Schema({
  orderNo: String,
  foods: [
    {
      food: {
        type: Schema.ObjectId,
        ref: "Food",
      },
      count: Number,
    },
  ],
  payment: {
    paymentAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
    method: {
      type: String,
      enum: ["Cash", "Card", "Qpay"],
      default: "Cash",
    },
    paidDate: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    buildingNo: { type: String },
    info: String,
  },
  delivery: {
    status: {
      type: String,
      enum: ["Pending", "Progressing", "Delivered"],
      default: "Pending",
    },
    deliveredAt: {
      type: Date,
      default: Date.now,
    },
  },
  phone: String,
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Нэрээ заавал оруулна уу"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "И-мэйл хаяг заавал оруулна уу"],
    },
    password: {
      type: String,
      required: [true, "Нууц үг заавал оруулна уу"],
      minlenght: 6,
      select: false,
    },
    avatarUrl: {
      type: String,
    },
    address: {
      khoroo: { type: Number },
      duureg: { type: String },
      buildingNo: { type: Number },
    },
    role: {
      type: ["Admin", "User", "Moderator"],
      default: "User",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    otp: {
      type: String,
      default: "",
    },
    orders: [orderSchema],
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = model("User", userSchema);

export default User;
