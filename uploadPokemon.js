import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Wstaw tutaj swoje dane z Supabase
const supabaseUrl = "https://larpdwessxeejlblrkxk.supabase.co";
const supabaseAnonKey = "sb_publishable_zizAOPlemlZOYO1Vwaw0uw_qqF_Hyuk";

// Tworzymy klienta Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Wczytaj JSON
const pokemonData = JSON.parse(fs.readFileSync("pokemon.json", "utf-8"));

// Funkcja dodająca Pokémony do Supabase
async function uploadPokemon() {
  for (const p of pokemonData) {
    const { data, error } = await supabase.from("pokemon").insert([p]);
    if (error) console.log("Błąd:", error);
  }
  console.log("Gotowe! Wszystkie Pokémony dodane do Supabase.");
}

// Uruchom funkcję
uploadPokemon();