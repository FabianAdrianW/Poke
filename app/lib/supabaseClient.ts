import { createClient } from "@supabase/supabase-js";

// Poprawne odczytanie zmiennych środowiskowych
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Tworzymy klienta Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);