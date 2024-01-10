import clc from "cli-color";

export const logger = {
  info: (message: string) => {
    console.log(clc.cyan(message));
  },
  warn: (message: string) => {
    console.log(clc.yellow(message));
  },
  error: (message: string) => {
    console.log(clc.red(message));
  },
  success: (message: string) => {
    console.log(clc.green(message));
  },
};
