export const saveStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

export const readStorage = <T>(key: string): T | null => {
  try {
    return JSON.parse(localStorage.getItem(key) || "");
  } catch (error) {
    console.error("Error getting from localStorage", error);
    return null;
  }
};
