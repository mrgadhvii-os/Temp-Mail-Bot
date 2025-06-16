import { BOT_TOKEN } from "../config/config.ts";

export const SubscriptionService = {
  async checkSubscription(userId: number): Promise<boolean> {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=@ItsUGPro&user_id=${userId}`
      );
      const data = await response.json();
      return ["member", "administrator", "creator"].includes(data.result?.status);
    } catch (error) {
      console.error("Subscription check error:", error);
      return false;
    }
  }
};
