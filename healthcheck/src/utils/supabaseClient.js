import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kliibxdjkxqnnzojijzs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWlieGRqa3hxbm56b2ppanpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNzQ0MzYsImV4cCI6MjA0Njc1MDQzNn0.uJGwDc-4WhYLQAXOXBmQmdjSu-pBLJbVgiDKFtXkfuc"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;