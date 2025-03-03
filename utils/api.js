import axios from "axios";

const API_URL = "https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,solana,cardano";

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ids: "bitcoin,ethereum,dogecoin,solana,cardano",
        vs_currencies: "usd",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch crypto prices");
  }
};
