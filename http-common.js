import axios from 'axios';

const GT_PORTLAND_ST_NAPTAN_ID = '940GZZLUGPS';
const KINGS_CROSS_NAPTAN_ID = '940GZZLUKSX';

export const HTTP = axios.create({
    baseURL: `https://api.tfl.gov.uk/StopPoint/${GT_PORTLAND_ST_NAPTAN_ID}/Arrivals?mode=tube`
})
