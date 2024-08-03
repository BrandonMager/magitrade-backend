import { model, Document, Schema } from "mongoose"

interface Purchase extends Document {
    price: number,
    shares: number
}

const PurchaseSchema = new Schema<Purchase>({
    price: { type: "Number", required: true },
    shares: { type: "Number", required: true },
})

interface Entry extends Document {
    stock: string,
    purchases: Purchase[]
}

const EntrySchema = new Schema<Entry>({
    stock: { type: String, required: true }, 
    purchases: { type: [PurchaseSchema], required: false}
})

interface UserType extends Document{
    userId: string,
    stocksOwned: Entry[],
}

const UserSchema = new Schema<UserType>({
    userId: { type: String, required: true},
    stocksOwned: {type: [EntrySchema], required: false},

})

const userModel = model<UserType>('User', UserSchema)
export default userModel

