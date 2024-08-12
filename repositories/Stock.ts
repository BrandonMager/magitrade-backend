import stockModel from "../models/Stock"
import userModel, { UserType } from "../models/User"

class StockRepositoty{
    async getAllStocks(){
        return await stockModel.find({})
    }

    async getStockByTicker(ticker: string){
        const stock = await stockModel.find({
            where: {
                ticker: ticker
            }
        })

        return stock
    }ß
}

export default new StockRepositoty()