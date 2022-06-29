export default function status(bot: any, message: any) {
  const chatId = message.chat.id,
    messageId = message.message_id;

  const response = `*GreenCode Status*:
*GreenCoders:* 0 🔰

*Eco-Colaboradores:* 0 🫂
*Fondos recaudados:* 0$ DOP 💵

*Eco-Proyectos realizados:* 0 📌
*Arboles plantados:* 0 🌱🪴
*CO2 compensado:* 0 ☁️
*Puntos verdes recuperados:* 0 🌳
`

  bot.sendMessage(chatId, response, { reply_to_message: messageId, reply_markup: "Markdown" });
}
