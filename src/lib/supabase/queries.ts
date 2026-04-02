import { supabase } from "./client";

export async function insertFeedback(message: string, pagePath = "/") {
  const trimmed = message.trim();

  if (!trimmed) {
    return { error: new Error("Feedback is empty") };
  }

  const { error } = await supabase.from("feedback_entries").insert({
    message: trimmed,
    page_path: pagePath,
  });

  return { error };
}