import axios from 'axios';

export default axios.create({
  baseURL: 'https://booksontap.azurewebsites.net/api',
});
