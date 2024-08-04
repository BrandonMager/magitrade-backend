import accountModel, { AccountInteface } from "../models/Account";
import { UserType } from "../models/User";
import UserRepository from "./User";

class AccountRepository{
    async createAccount(data: AccountInteface){
        const exists = await this.findAccountByEmail(data.email)
        console.log(exists)
        if(exists.length > 0){
            throw Error("Email is used already!")
        }

        const newAccount = new accountModel(data)

        const userData: any = {
            userId: newAccount.userId,
            stocksOwned: []
        }

        const newUser = UserRepository.createUser(userData)
        return await newAccount.save()
    }

    async findAccountByEmail(userId){
        return await accountModel.find({
            userId: userId
        }).exec()
    }
}

export default new AccountRepository();