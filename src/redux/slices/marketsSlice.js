import { createSlice } from "@reduxjs/toolkit"


const init_state = {
    marketData: [],
    loading: false,
    errorMessage: '',

}

const marketSlice = createSlice({
    name: 'market',
    init_state,
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
console.log(marketSlice.reducer);
debugger

export const { isLoading, setMarketData, setMarketError } = marketSlice.actions

export default marketSlice.reducer