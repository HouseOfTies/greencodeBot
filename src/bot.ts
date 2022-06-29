import "reflect-metadata"; // We need this in order to use @Decorators
import config from "./config";
import express from "express";
import TelegramBot from "node-telegram-bot-api";
import Logger from "./loaders/logger";

async function startBot() {
  const bot: TelegramBot = new TelegramBot(config.bot, { polling: true });
  const app = express();
  const motd: string = `-----------------------------------------------
                🔰 GreenCodeBot listening at port: ${config.port} 🔰
        -----------------------------------------------`;
  app
    .listen(config.port, async () => {
      Logger.info(
        "development environment detected, automatically command load triggered for more confort. ❤️"
      );
      await require("./loaders/commands").default({
        bot: bot,
      });

      bot.on("polling_error", (error) => {
        Logger.error(error);
      });

      bot.on("message", async (message) => {
        const chatId = message.chat.id;
        const newMember = "@"+message.new_chat_member.username || message.new_chat_member.first_name;
        const leftMember = message.left_chat_member.first_name;

        if (message.new_chat_members != undefined) {
          bot.sendMessage(
            chatId,
            `Bienvenido/a ${newMember} a ECO | GreenCode, gracias por sumarte a la experiencia de dejar huellas de vida.\n𝑻𝒉𝒊𝒔 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖 💚🍃`
          );
        } else if (message.left_chat_member != undefined) {
          bot.sendMessage(chatId, leftMember + " abandonó el verde futuro.");
        }
        console.log(message);
      });
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startBot();
