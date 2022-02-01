import axios from "axios";

/**
 * 메인 목록 조회
 * @param {*} categoryType 
 * @returns 
 */
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

/**
 * 영상 목록 조회
 * @param {*} channelId 
 * @returns 
 */
export function getVideoList(channelId) {
    const param = '?channelId=' + channelId;
    return axios.get('/api/video/list' + param)
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

