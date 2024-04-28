function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    
    const header = document.querySelector("#header .header_content h3");
    
    
    const opcoes = document.querySelector("#opcoes");
    
    const img = document.querySelector("#about .about_left img");
    const about = document.querySelector("#about .about_container h2");

    const footer = document.querySelector("#footer .footer_container h3");
    const player = document.querySelector("#player");

    if (html.classList.contains('light')) {
        img.setAttribute('src', './src/assets/avatar-light.png');
        header.textContent = "Seja bem vindo! Esse projeto é uma dedicatória a franquia Fallout, não visando fins lucrativos";
        footer.textContent = "Desenvolvido por Gabriel Nogueira Pimentel - Turma 18";
        about.textContent = "Sobre o desenvolvedor";
        opcoes.classList.add("hidden");
        player.classList.add("hidden");
    } else {
        img.setAttribute('src', './src/assets/vaultBoyIcon.png');
        header.textContent = "Bem-vindo à Vault-Tec, pioneira em soluções de abrigo e sobrevivência pós-apocalíptica desde 2054. Como líder global em tecnologia de bunkers e abrigos subterrâneos, a Vault-Tec tem o compromisso de garantir a segurança e o bem-estar dos habitantes do mundo pós-guerra.";
        footer.textContent = "Desenvolvido por Vault-Tec"
        about.textContent = "Sobre a empresa";
        opcoes.classList.remove("hidden");
        player.classList.add("hidden")

    }
}
