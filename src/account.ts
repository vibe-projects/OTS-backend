import mongoose from "mongoose";
const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

const user_type_list = ['admin', 'tutor', 'student', 'parent', 'guest', 'super_admin'] as const;

export interface IAccount extends mongoose.Document {
  username: string,
  password: string,
  email: string,
  user_type: typeof user_type_list
  
}

export const AccountSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  user_type: { type: String, required: true }
});

const Account = mongoose.model<IAccount>("Account", AccountSchema);
export default Account;