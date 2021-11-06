interface Env {
  data: string;
}

export const env: Env = {
  data:
    typeof import.meta.env.VITE_DATA_FOLDER === "string"
      ? import.meta.env.VITE_DATA_FOLDER
      : null,
};
