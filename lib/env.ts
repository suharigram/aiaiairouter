export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
).replace(/\/$/, "");

export const consoleUrl =
  process.env.NEXT_PUBLIC_CONSOLE_URL || "https://console.aiaiairouter.com";

export const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://api.aiaiairouter.com/v1";

export const socialLinks = {
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/GonidonCloud/AiAiAiRouter",
  discord: process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/aiaiairouter",
  youtube:
    process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@AiAiAiRouter",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/AiAiAiRouter",
  huggingFace:
    process.env.NEXT_PUBLIC_HUGGINGFACE_URL ||
    "https://huggingface.co/GonidonCloud",
};
