import { readFileSync, existsSync } from "fs";
import { join } from "path";

interface ExtractContent {
  type: string;
  content: Buffer;
}

export function extract_content(path: string): ExtractContent | undefined {
  const tests = [
    {
      type: "yaml",
      file: path + ".yaml",
    },
    {
      type: "yaml",
      file: join(path, "index.yaml"),
    },
    {
      type: "md",
      file: path + ".md",
    },
    {
      type: "md",
      file: join(path, "index.md"),
    },
  ];
  let i: number, success: boolean;
  for (i = 0; i < tests.length; i++) {
    if (existsSync(tests[i].file)) {
      success = true;
      break;
    }
  }
  if (!success) throw new Error(`No definition file exists for path '${path}'`);
  const { type, file } = { ...tests[i] };
  const content = readFileSync(file);
  return {
    type: type,
    content: content,
  };
}
