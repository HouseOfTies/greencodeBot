export default function status(bot: any, message: any) {
  const chatId = message.chat.id,
    messageId = message.message_id;

  const response = `*GreenCode Status*:
  
*GreenCoders:* 0 ð°

*Eco-Colaboradores:* 0 ðŦ
*Fondos recaudados:* 0$ DOP ðĩ

*Eco-Proyectos realizados:* 0 ð
*Arboles plantados:* 0 ðąðŠī
*CO2 compensado:* 0 âïļ
*Puntos verdes recuperados:* 0 ðģ
`

  bot.sendMessage(chatId, response, { reply_to_message: messageId, parse_mode: "Markdown" });
}
