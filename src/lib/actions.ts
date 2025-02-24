const BASE_URL = "https://api.exchangerate.host";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/list?access_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch currencies");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getLatestRates(source: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/live?access_key=${API_KEY}&source=${source}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch latest rates");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function convert(from: string, to: string, amount: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`,
    );
    if (!response.ok) {
      throw new Error("Failed to convert currency");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
