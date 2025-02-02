import { supabase } from "app/utils/supabase";
import { router } from "expo-router";

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  } else {
    console.log("Signed out successfully");
    router.replace("/");
  }
}
