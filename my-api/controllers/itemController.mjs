import { Item } from '../models/itemModel.mjs';

export const getItems = (req, res) => {
  res.json(Item.getAll());
};

export const getItemById = (req, res) => {
  const item = Item.getById(parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
};

export const createItem = (req, res) => {
  const newItem = Item.create(req.body);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const updatedItem = Item.update(parseInt(req.params
    .id), req.body);
  if (updatedItem) {
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
};

export const deleteItem = (req, res) => {
  const deletedItem = Item.delete(parseInt(req.params
    .id));
  if (deletedItem) {
    res.json(deletedItem);
  } else {
    res.status(404).send('Item not found');
  }
};