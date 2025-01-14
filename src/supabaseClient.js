import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rveqgzqzcofbymyqgobf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2ZXFnenF6Y29mYnlteXFnb2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzM3NDAsImV4cCI6MjA1MjQwOTc0MH0.eC_Zo4J0o3MmGPtZawzI98-z-PPklf9F0o58W-YNJ5Y";
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
  },
});

export const getCurrentUser = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }

  return session?.user || null;
};

export default supabase;
