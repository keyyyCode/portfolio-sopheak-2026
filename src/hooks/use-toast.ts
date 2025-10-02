import { useCallback } from "react";

export default function useToast() {
  const showToast = useCallback((message: string) => {
    // Minimal placeholder - integrate a real toast UI later
    if (typeof window !== "undefined") alert(message);
  }, []);

  return { showToast };
}
