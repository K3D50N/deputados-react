import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://dadosabertos.camara.leg.br/api/v2/' });

export default api;