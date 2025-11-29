import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://prcsnmjnhvisrzhlzshs.supabase.co",
  "SUA_ANON_KEY"
);

const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert("Erro: " + error.message);
    } else {
        alert("Login realizado ✅");
        window.location.href = "dashboard.html";
    }
});
