import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// When the project is built and published elsewhere (e.g. GitHub Pages), the
// Supabase connection values are not included in the download. The site must
// still render instead of crashing on a white screen, so fall back to a
// placeholder client and let the forms show a friendly error.
let client: SupabaseClient;
if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey);
} else {
  client = createClient('https://placeholder.supabase.co', 'placeholder-anon-key');
}

export const hasSupabaseCredentials = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = client;
