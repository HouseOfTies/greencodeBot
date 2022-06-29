import Logger from "./logger";
import { status } from "@/commands";

export default async ({ bot }) => {
  Logger.info("Commands loaded ✅");

  bot.onText(/^\/status/, async (message) => {
    // Whole programming logic within this section
    status(bot, message);
  });
};
