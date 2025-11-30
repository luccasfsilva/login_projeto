import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://prcsnmjnhvisrzhlzshs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByY3NubWpuaHZpc3J6aGx6c2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTY5MjcsImV4cCI6MjA3OTgzMjkyN30.cQpd7xq1KVtnyF7ycMwrJzOcdhpmqob3jqt07wud35g"
);

const form = document.getElementById("nova-senha-form");
const msg = document.getElementById("msg");

// ✅ pega tokens da URL
const hash = window.location.hash.substring(1);
const params = new URLSearchParams(hash);

const access_token = params.get("access_token");
const refresh_token = params.get("refresh_token");

// ✅ cria sessão com o token do email
if (access_token && refresh_token) {
  await supabase.auth.setSession({
    access_token,
    refresh_token
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newPassword = form.querySelector("input").value;

  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    msg.textContent = "Erro: " + error.message;
    msg.style.color = "red";
  } else {
    msg.textContent = "Senha atualizada com sucesso ✅";
    msg.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }
});
