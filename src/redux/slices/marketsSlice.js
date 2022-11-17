import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    marketData: [],
    loading: false,
    errorMessage: '',

}

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        isLoading: state => {
            state.loading = true
        },
        setMarketData: (state, action) => {
            state.marketData = action.payload
            state.loading = false
        },
        setMarketError: (state, action) => {
            state.errorMessage = action.payload
            state.loading = false
        }
    }
})

export const { isLoading, setMarketData, setMarketError } = marketSlice.actions

export default marketSlice