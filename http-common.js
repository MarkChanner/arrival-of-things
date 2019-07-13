import axios from 'axios';

const GT_PORTLAND_ST_NAPTAN_ID = '940GZZLUGPS';

export const HTTP = axios.create({
    baseURL: `https://api.tfl.gov.uk/StopPoint/${GT_PORTLAND_ST_NAPTAN_ID}/Arrivals?mode=tube`
})
