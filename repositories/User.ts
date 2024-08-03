import userModel, { UserType } from "../models/User"

class UserRepository {

    async createUser(data: UserType){
        console.log(data)
        const exists = await this.getUserByUserId(data.userId)
        if(exists){
            throw Error("User already exists!")
        }

        const newUser = new userModel(data)
        return await newUser.save()
    }
    
    async getUserByUserId(userId){
        return await userModel.find({
            userId: userId
        }).exec()
    }

    async updatePurchases(userId, purchase, shares){ 
        const user = await userModel.find({
            userId: userId
        }).exec()
    
    }
}

export default new UserRepository();