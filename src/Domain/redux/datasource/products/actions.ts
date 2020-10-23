
import axios from 'axios';

function getProducts() {
  return axios({
    method: 'get',
    url: 'https://my.api.mockaroo.com/epi?key=9f541900'
  }).then(res => parseData(res));
}

function parseData(response){
  const { data } = response || {};
  try {
    return data.map( item => ({label: item.name }));
  } catch (error) {
    throw error;
  }
}

export default {
  LIST_HOME_PRODUCTS: () => {
    return {
      type: 'LIST_HOME_PRODUCTS',
      payload: getProducts(),
    };
  },
};
