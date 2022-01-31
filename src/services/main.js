import axios from "axios";

export function getMainList(categoryType) {
    const param = '?categoryType=' + categoryType;
    return axios.get('/api/main/list' + param)
        .then(({ data }) => {
            const result = data;
            return result;
        })
        .catch((err) => {
            if (err.returnCode) {
                console.log(err);
            }
        });
}