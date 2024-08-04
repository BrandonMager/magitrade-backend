import { Document, model, Schema } from "mongoose";

export interface AccountInteface extends Document{
    userId: string,
    email: string
    password: string,
}

const AccountSchema = new Schema<AccountInteface>({
    userId: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const accountModel = model<AccountInteface>('Account', AccountSchema, "Accounts")
export default accountModel