import { Subscription } from "../models/Subscription.js";

// Create subscription
const createSubscription = async (req, res) => {
  const { userId, plan } = req.body;

  const subscription = new Subscription({ userId, plan });
  await subscription.save();

  res.status(201).json(subscription);
};

// Get user's subscription
const getUserSubscription = async (req, res) => {
  const { userId } = req.params;
  const subscription = await Subscription.findOne({ userId });

  if (subscription) {
    res.json(subscription);
  } else {
    res.status(404).json({ message: "Subscription not found" });
  }
};

export { createSubscription, getUserSubscription };
