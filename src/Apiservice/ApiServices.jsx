import axios from "axios";

class API {
    constructor() {
        this.baseUrl = import.meta.env.BASE_URL;
        this.token = import.meta.env.VITE_API_KEY;
    }

    getSummarize = async () => {
        try {
            const res = await axios.get(this.baseUrl + "summarize", {
                params: {
                    url: "https://time.com/6266679/musk-ai-open-letter/",
                    length: 3
                },
                headers: {
                    'X-RapidAPI-Key': this.token,
                    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
                }
            });
            return res;
        } catch (err) {
            return err;
        }
    }
}

export default API;
