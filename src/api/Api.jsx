import React from 'react';
import axios from 'axios';

const Libros = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    return response.data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

  export default Libros