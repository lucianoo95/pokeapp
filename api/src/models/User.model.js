import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

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
  resetLink: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
  versionKey: false
});

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(receivedPassword, password);
}

const User = model("User", UserSchema);
export default User;
