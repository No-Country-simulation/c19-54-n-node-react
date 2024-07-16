import { User } from '../models/User.js'

const getAllUsers = async (req, res) => {
  try {
    console.log('Fetching users from the database...');
    const users = await User.find({});
    console.log('Users retrieved:', users);

    res.status(200).json({
      status: 'Success',
      data: {
        users
      }
    });
    console.log("status: 'Success'");
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({
      status: 'Failed',
      message: err.message
    });
  }
};


const getUserById = async (req, res) => {}

const createUser = async (req, res) => {}

const updateUser = async (req, res) => {}
const deleteUser = async (req, res) => {}

export const controllers = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
