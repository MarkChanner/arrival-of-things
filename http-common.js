import axios from 'axios';

const GT_PORTLAND_ST_NAPTAN_ID = '940GZZLUGPS';
const KINGS_CROSS_NAPTAN_ID = '940GZZLUKSX';
const OXFORD_CIRCUS_NAPTAN_ID = '940GZZLUOXC'

export const HTTP = axios.create({
    baseURL: `https://api.tfl.gov.uk/StopPoint/${OXFORD_CIRCUS_NAPTAN_ID}/Arrivals?mode=tube`
})
