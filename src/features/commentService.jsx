import axios from 'axios';

const API_URL = 'https://blogapi.fly.dev';

const sendComment = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/message`, data);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

const commentService = { sendComment };

export default commentService;
