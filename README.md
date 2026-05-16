# Jean Barros — Portfólio

Clonagem visual do portfólio hospedado em [app.xperiun.com/in/lucas-fonseca](https://app.xperiun.com/in/lucas-fonseca), com substituição do nome **Lucas Fonseca** por **Jean Barros**.

## 🚀 Como rodar

Abra o arquivo diretamente no navegador:

```
public/index.html
```

Não é necessária nenhuma dependência externa, servidor local ou bundler.

---

## 📁 Estrutura do Projeto

```
/public
│── index.html

/src
│── /JS
│   │── App.js
│   ├── /animation
│   │   └── motion.js
│   ├── /components
│   │   ├── /Contact        → Contact.js
│   │   ├── /Footer         → Footer.js
│   │   ├── /NavBar         → NavBar.js
│   │   ├── /Section        → Section.js
│   │   ├── /SectionEducation     → Education.js
│   │   ├── /SectionExperience    → Experiences.js, ExperiencesCard.js
│   │   ├── /SectionProjects      → Projects.js, ProjectsCard.js, ProjectsDetails.js
│   │   └── /SectionSkills        → Skills.js
│   ├── /data
│   │   └── Bios.js
│   └── /themes
│       └── Themes.js
│
│── /CSS
│   │── App.css
│   │── style.css
│   └── /components   (espelha a estrutura de /JS)
│
│── /imgs
│   ├── jean.jpeg
│   ├── logo.png
│   └── scanner.jpg
```

---

## 🛠 Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis, animações, glassmorphism, responsividade
- **JavaScript Vanilla** — Renderização dinâmica, modais, tabs, animações

Sem frameworks, sem dependências.

---

## 🖼 Imagens

Coloque na pasta `/src/imgs/`:
- `jean.jpeg` — Foto de perfil
- `scanner.jpg` — Imagem do banner superior
- `logo.png` — Logo (opcional)

---

## ✏️ Personalização

Edite o arquivo `/src/JS/data/Bios.js` para atualizar:
- Dados pessoais (nome, título, contato)
- Skills e estrelas de avaliação
- Experiências profissionais
- Formação acadêmica
- Projetos (título, imagem, descrição, links)
