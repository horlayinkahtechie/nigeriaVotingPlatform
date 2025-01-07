import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sxjbvgmuwyjygkeoqwse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4amJ2Z211d3lqeWdrZW9xd3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyODExNjYsImV4cCI6MjA0OTg1NzE2Nn0.VL_gEOI5Igjv1nX3vuKW11N7RiuSYYdHQeQlfr53uig"; // Never expose your key in the frontend; use environment variables instead.
export const supabase = createClient(supabaseUrl, supabaseKey);

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
