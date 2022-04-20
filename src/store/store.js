import { createStore } from 'vuex'
import axios from "axios"

const urlPrefix = "http://localhost:3000"


const store = createStore({
    state() {
        return {
            marketData: "hallo"
        }
    },
    mutations: {
        setMarketData(state, payload) {

            state.marketData = payload
        }
    },
    getters: {
        fetchMarketData(state) {
            return state.marketData
        }
    },
    actions: {
        getMarketData(context, payload) {
            console.log(payload)
            axios.get(`${urlPrefix}/steammarketstats/data`)
                .then((res) => {
                    context.commit("setMarketData", res.data.marketData)
                })
        }
    }
})

export default store