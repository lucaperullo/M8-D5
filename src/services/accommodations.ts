import express, { Router } from "express";
import accommodationsSchema from "../models/index";

const route = Router();

route.get("/", async (req, res, next) => {
  try {
    const accommodation = await accommodationsSchema.find();
    res.status(200).send(accommodation);
  } catch (error) {
    next(error);
  }
});

route.get("/:id", async (req, res, next) => {
  try {
    const accommodation = await accommodationsSchema.findById(req.params.id);
    res.send(accommodation).status(200);
  } catch (error) {
    next(error);
  }
});

route.post("/", async (req, res, next) => {
  try {
    const { name, description, maxGuests, city } = req.body;

    if (!description || !name || !maxGuests || !city)
      throw new Error("Invalid data");

    const accommodations = new accommodationsSchema({
      description,
      name,
      maxGuests,
      city,
    });
    await accommodations.save();

    res.status(201).send(accommodations);
  } catch (error) {
    next(error);
  }
});

route.put("/:id", async (req, res) => {});

route.delete("/:id", async (req, res, next) => {
  try {
    await accommodationsSchema.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default route;
