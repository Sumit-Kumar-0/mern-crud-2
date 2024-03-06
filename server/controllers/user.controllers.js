import User from "../models/user.models.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "please fill all the fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }

    
    const user = await User.create({
      name,
      email,
      password,
    });
    
    const userId = user._id;
    await res.cookie('userId', `${userId}`, { httpOnly: true });

    res
      .status(201)
      .json({ success: true, message: "user register successfully!", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in registrater controller",
      error,
    });
  }
};

export const getAllUserController = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ success: true, allUsers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in registrater controller",
      error,
    });
  }
}

export const getSingleUserController = async (req, res) => {
  try {
    const {id} = req.params

    const singlrUser = await User.findById({_id : id});

    if (!singlrUser) {
      return res.status(400).json({ success: false, message: "user not exist!!" });
    }

    res.status(200).json({ success: true, message: "sigle user get successfully!", singlrUser });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: "Error in getting products by owner",
      error: error // Return error message
    });
  }
}

export const deleteSingleUserController = async (req, res) => {
  try {
    const {id} = req.params

    const singlrUser = await User.findByIdAndDelete({_id : id});

    if (!singlrUser) {
      return res.status(400).json({ success: false, message: "user not exist!!" });
    }

    res.status(200).json({ success: true, message: "sigle user delete successfully!", singlrUser });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: "Error in getting products by owner",
      error: error // Return error message
    });
  }
}

export const updateSingleUserController = async (req,res) => {
  try {
    const {id} = req.params
    const {name, email, password} = req.body;

    const singlrUser = await User.findByIdAndUpdate({_id : id}, {name, email, password} ,{new: true});

    if (!singlrUser) {
      return res.status(400).json({ success: false, message: "user not exist!!" });
    }

    res.status(200).json({ success: true, message: "sigle user updated successfully!", singlrUser });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: "Error in getting products by owner",
      error: error // Return error message
    });
  }
}
 