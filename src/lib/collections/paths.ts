import { readdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import { env } from "./env";

export function paths(collection?: string): string[] {
  const folder = env.data;
  const root: string = resolve();
  const path: string = collection
    ? join(root, folder, collection)
    : join(root, folder);
  if (!existsSync(path)) throw new Error(`Folder '${path}' not found`);
  const paths: string[] = readdirSync(path);
  return paths;
}
