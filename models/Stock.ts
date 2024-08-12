import { model, Document, Schema} from "mongoose";

export interface StockInterface extends Document{
    ticker: string
    theme?: string | null,
    polygonTicker: string,
    name: string,
    oneDayData?: JSON[] | null
}

const StockSchema = new Schema<StockInterface>({
    name: {type: String, required: true},
    theme: {type: String, required: false},
    polygonTicker: {type: String, required: true},
    ticker: {type: String, required: true},
    oneDayData: {type: [JSON], required: false},

})

export default StockSchema