import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd7e4ff33c0msh4d72d3d5648e402p13a702jsn9ec402f5456e' ,
    },
  });
    
  return data;
}