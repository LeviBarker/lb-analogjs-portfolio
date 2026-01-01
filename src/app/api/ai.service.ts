import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

interface AiResponse {
  id: string; // Unique identifier for the chat completion
  object: string; // Type of the object (chat completion)
  created: number; // Timestamp when the completion was created
  model: string; // Model used (e.g., "gpt-3.5-turbo-0125")
  choices: Choice[]; // List of choices provided by the model
  usage: Usage; // Information about token usage
  service_tier: string; // The service tier, e.g., "default"
  system_fingerprint: string | null; // Fingerprint for the system (null if not present)
}

interface Choice {
  index: number; // Index of the choice in the list
  message: Message; // Message returned by the model
  logprobs: any | null; // Log probabilities (null if not provided)
  finish_reason: string; // Reason for the completion stopping (e.g., "stop")
}

interface Message {
  role: string; // Role of the sender (e.g., "assistant")
  content: string; // Content of the message
  refusal: string | null; // Refusal message (null if not provided)
  annotations: any[]; // Annotations (empty array in this case)
}

interface Usage {
  prompt_tokens: number; // Number of tokens used in the prompt
  completion_tokens: number; // Number of tokens used in the completion
  total_tokens: number; // Total number of tokens used
  prompt_tokens_details: TokensDetails; // Details of prompt token usage
  completion_tokens_details: TokensDetails; // Details of completion token usage
}

interface TokensDetails {
  cached_tokens: number; // Number of cached tokens (usually 0)
  audio_tokens: number; // Number of audio tokens (usually 0)
  reasoning_tokens: number; // Number of reasoning tokens (usually 0)
  accepted_prediction_tokens: number; // Accepted prediction tokens (usually 0)
  rejected_prediction_tokens: number; // Rejected prediction tokens (usually 0)
}

interface AiRequest {
    question: string
}

@Injectable({ providedIn: 'root' })
export class AiService {
    private readonly BASE_PATH = 'https://ai.levibarker.com';
    private readonly http = inject(HttpClient);

    ask(question: string) {
        return this.http.post<AiResponse> (`${this.BASE_PATH}/ask`, {
            question
        });
    }
}