import { isLoading, setMarketData, setMarketError } from "../slices/marketsSlice"
import { instance } from "../../axios/axios"


const defaultParams = 'order=market_cap_desc&vs_currency=usd&sparkline=false&price_change_percentage=24h'


export const getMarkets = (page) => async dispatch => {
    try {
        dispatch(isLoading())
        const data = await instance.get(`coins/markets?per_page=${page}&${defaultParams}`)
        dispatch(setMarketData(data.data))
    } catch (error) {
        dispatch(setMarketError(error.message))
    }
}