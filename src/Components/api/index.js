import axios from "axios";

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin");

    console.log(data);
    return { data };
  } catch (error) {
    return error;
  }
};
