# Palestrantes 2026

Esta pasta ficará vazia até que os palestrantes da edição 2026 sejam confirmados.

Quando for adicionar um(a) palestrante, siga o padrão usado em 2025:

1. Crie uma subpasta com o nome da pessoa, por exemplo `Palestrantes/Fulano/`.
2. Coloque a foto dela dentro (ex.: `Palestrantes/Fulano/foto.jpg`).
3. No `index.html` (e no `index_en.html`, traduzido), dentro da seção
   `<section class="palestrantes">`, adicione um bloco como este,
   substituindo o placeholder "Em breve" quando já houver pelo menos
   um nome confirmado:

   ```html
   <div id="Fulano_desc" class="palestrante-card">
     <img class="palestrante-photo" src="Palestrantes/Fulano/foto.jpg" alt="Foto Fulano">
     <div class="info-palestrante">
       <div class="nome_palestrante_linkedin_icone">
         <h3>Nome Completo</h3>
         <a href="https://www.linkedin.com/in/..." target="_blank">
           <img class="linkedin" src="img/linkedin/icons8-linkedin-480.png" alt="LinkedIn">
         </a>
       </div>
       <p class="bio">Biografia curta da pessoa.</p>
     </div>
   </div>
   ```

4. Ligue o card ao cronograma usando âncoras (`#Fulano_desc` /
   `#Fulano_pal`), do mesmo jeito que era feito no site de 2025 —
   veja `index.html` do repositório `qiskit-fall-fest-br/2025` como
   referência caso precise relembrar o padrão exato.
