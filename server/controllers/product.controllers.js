import mongoose from "mongoose";
import Product from "../models/product.models.js";

export const productCreateController = async (req, res) => {
    try {
        const { name, brand, price, description, owner } = req.body;
    
        if (!name || !brand || !price || !description || owner) {
          return res
            .status(400)
            .json({ success: false, message: "please fill all the fields" });
        }

        const userId = req.cookies.userId;
        console.log(userId);
        const product = await Product.create({
          name,
          brand,
          price,
          description,
          owner: userId
        });
    
        res
          .status(201)
          .json({ success: true, message: "product created successfully!", product });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "error in product controller",
          error,
        });
      }
}

export const getProductsByOwner = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;

    // Use aggregation pipeline to retrieve products by owner
    const products = await Product.aggregate([
      {
        $match: { owner: new mongoose.Types.ObjectId(ownerId) } // Match products by owner ID
      },
      {
        $lookup: {
          from: 'users', // Collection name for users
          localField: 'owner',
          foreignField: '_id',
          as: 'owner' // Store matched user documents in 'owner' array
        }
      },
      {
        $unwind: '$owner' // Deconstruct the 'owner' array
      },
      {
        $project: {
          name: 1,
          brand: 1,
          price: 1,
          description: 1,
          'owner.name': 1, // Select specific fields from the owner object
          'owner.email': 1
        }
      }
    ]);

    console.log('Products:', products);

    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: "Error in getting products by owner",
      error: error // Return error message
    });
  }
};

