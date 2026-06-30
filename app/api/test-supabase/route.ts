// app/api/test-supabase/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL || ''
  const supabaseKey = process.env.SUPABASE_ANON_KEY || ''

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      error: 'Supabase is not configured. Ustaw SUPABASE_URL i SUPABASE_ANON_KEY w środowisku.',
    })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Twój Supabase URL i Key (anon key jest ok do testów)
  // Pobierz np. 5 pierwszych wierszy z tabeli pokemons
  const { data, error } = await supabase
    .from('pokemons')
    .select('*')
    .limit(5)

  if (error) return NextResponse.json({ error: error.message })
  return NextResponse.json({ data })
}