import axios from "axios"

export default {
    scrape: function(){
        return axios.get("/api/scrape")
    }
}