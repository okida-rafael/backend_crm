//Define o schema do Mongoose

import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  contact: {
    name: {
      type: String,
      required: true,
    },
    phone1: {
      type: String,
      required: true,
    },
    phone2: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  cnpj: {
    type: String,
    required: false,
  },
  obs: {
    type: String,
    required: false,
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
