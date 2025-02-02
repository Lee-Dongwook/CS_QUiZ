import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { AppState } from "react-native";

const supabaseUrl = "https://jfolgcdqxnppspozihov.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb2xnY2RxeG5wcHNwb3ppaG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NzkyNTIsImV4cCI6MjA1NDA1NTI1Mn0.qNHS589-uN0CjPmjxwP2YPQWx-kNUZHuLWJjyTng4DI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
