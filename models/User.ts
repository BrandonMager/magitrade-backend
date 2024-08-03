import { model, Document, Schema } from "mongoose"

interface Purchase extends Document {
    price: Schema.Types.Decimal128
    shares: Schema.Types.Decimal128
}

const PurchaseSchema = new Schema<Purchase>({
    price: { type: Schema.Types.Decimal128, required: true },
    shares: { type: Schema.Types.Decimal128, required: true },
})

interface Entry extends Document {
    stock: string,
    purchases: Purchase[]
}

const EntrySchema = new Schema<Entry>({
    stock: { type: String, required: true }, 
    purchases: { type: [PurchaseSchema], required: false}
})

export interface UserType extends Document{
    userId: string,
    stocksOwned: Entry[],
}

const UserSchema = new Schema<UserType>({
    userId: { type: String, required: true},
    stocksOwned: {type: [EntrySchema], required: false},

})

const userModel = model<UserType>('User', UserSchema, "Users")
export default userModel

