// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qnjicauvdtqthxoxzsbk.supabase.co";  // Buraya kendi URL'ni yaz
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuamljYXV2ZHRxdGh4b3h6c2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjcwNjQsImV4cCI6MjA2MTI0MzA2NH0.T3t8TLmmjXpOMBKW0e740Jd7xQk9Egc3aQbRNSqP0qE";  // Buraya kendi anon public key'ini yaz

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
