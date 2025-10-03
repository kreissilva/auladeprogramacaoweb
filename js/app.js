// app.js - funcionalidades básicas

// Exemplo: alerta ao enviar formulários
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Formulário enviado com sucesso!");
    });
  });
});

// Exemplo: galeria dinâmica (futuro)
console.log("JS carregado: pronto para interações futuras!");
