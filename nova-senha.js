import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://prcsnmjnhvisrzhlzshs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByY3NubWpuaHZpc3J6aGx6c2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTY5MjcsImV4cCI6MjA3OTgzMjkyN30.cQpd7xq1KVtnyF7ycMwrJzOcdhpmqob3jqt07wud35g"
);

const form = document.getElementById("new-password-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const password = form.querySelector("input").value;

    const { error } = await supabase.auth.updateUser({
        password
    });

    if (error) {
        msg.textContent = "Erro: " + error.message;
    } else {
        msg.textContent = "Senha alterada com sucesso ✅";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
});
