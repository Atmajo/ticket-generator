import mongoose from "mongoose";

export const ticketSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  membershipId: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  qr: {
    type: String,
    required: true,
  },
});

export const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
