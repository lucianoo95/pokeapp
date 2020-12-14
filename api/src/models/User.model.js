import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
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
  password: {
    type: String,
    required: true,
  },
  lastConnection: {
    type: String,
    default: new Date().toLocaleString(),
  },
  resetLink: {
    type: String,
    default: "",
  }
}, {
  timestamps: true,
  versionKey: false
});

const User = model("User", UserSchema);
export default User;
