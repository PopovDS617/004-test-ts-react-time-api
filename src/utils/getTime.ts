const API_URL = 'https://worldtimeapi.org/api/timezone/Europe/Moscow';

export const getTime = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  return data;
};
