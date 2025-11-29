import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://prcsnmjnhvisrzhlzshs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByY3NubWpuaHZpc3J6aGx6c2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTY5MjcsImV4cCI6MjA3OTgzMjkyN30.cQpd7xq1KVtnyF7ycMwrJzOcdhpmqob3jqt07wud35g"
);

const form = document.getElementById("signup-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    msg.textContent = "Criando conta...";
    msg.style.color = "#333";

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        msg.textContent = error.message;
        msg.style.color = "red";
        return;
    }

    if (data.user && !data.user.confirmed_at) {
        msg.textContent = "Conta criada ✅ Confirme no seu email.";
        msg.style.color = "green";
    } else {
        msg.textContent = "Conta criada com sucesso ✅";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
});
