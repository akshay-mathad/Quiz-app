import axios from 'axios';

const API_URL = 'https://quizapi.io/api/v1/questions'; // Replace with the actual API endpoint
const API_KEY = process.env.REACT_APP_API_KEY; // Use the environment variable

export const fetchQuizQuestions = async (category, difficulty, limit, tags) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      params: {
        category,
        difficulty,
        limit,
        tags,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
}; 