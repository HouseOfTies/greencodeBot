export default function status(bot: any, message: any) {
    const chatId = message.chat.id,
      messageId = message.message_id;
    
      bot.sendMessage(chatId, "Status", { reply_to_message: messageId});
  }