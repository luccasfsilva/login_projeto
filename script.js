import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://prcsnmjnhvisrzhlzshs.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByY3NubWpuaHZpc3J6aGx6c2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTY5MjcsImV4cCI6MjA3OTgzMjkyN30.cQpd7xq1KVtnyF7ycMwrJzOcdhpmqob3jqt07wud35g";

const supabase = createClient(supabaseUrl, supabaseKey);

// LOGIN
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        alert("Erro: " + error.message);
    } else {
        alert("Login realizado com sucesso ✅");
        // redirecionar
        window.location.href = "dashboard.html";
    }
});
