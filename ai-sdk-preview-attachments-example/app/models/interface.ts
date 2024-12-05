export interface Message {
  content: string;
  role: "system" | "user" | "assistant" | "function" | "data" | "tool";
  experimental_attachments?: Attachment[];
}
interface Attachment {
  name?: string;
  contentType?: string;
  url: string;
}
export interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  choices: {
    index: number;
    message: Message;
    finish_reason: string;
  }[];
}
