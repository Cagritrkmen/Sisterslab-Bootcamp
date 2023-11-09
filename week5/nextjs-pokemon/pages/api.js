import axios from 'axios';


const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const axiosInstance = axios.create({
  baseURL,
});

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    const data = response.data.results.map((pokemon, index) => {
         const id = index+ 1
         return {...pokemon,id}
      });
    return data;
    
  } catch (error) {
    console.error('Pokemon getirilirken bir hata oluştu:', error);
    throw error;
  }
};


export const fetchCharacter = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data; // 
  } catch (error) {
    console.error('Pokemon detayları getirilirken bir hata oluştu:', error);
    throw error; 
  }
};