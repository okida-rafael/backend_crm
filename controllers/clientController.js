// contém a lógica para lidar com as operações CRUD.

import Client from "../models/clientModel.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = new Client(clientData);

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updates = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );
    if (!updatedClient)
      return res.status(404).json({ message: "Client not found" });
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
