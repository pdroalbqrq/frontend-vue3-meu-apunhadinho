import axios from "axios"
import { ref } from "vue"

export const useFetch = (url, config = {}) => {

    const data = ref(null);
    const response = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetch = async () => {
        loading.value = true;

        try {
            const result = await axios.request({ url, ...config });
            response.value = result;
            data.value = result.data;
        } catch (ex) {
            error.value = ex
        } finally {
            loading.value = false;
        }
    };

    if (!config.skip) fetch();

    return { data, response, error, loading, fetch }
}