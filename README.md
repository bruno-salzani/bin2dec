# 🚀 Bin2Dec (Vue.js + Tailwind CSS)
![Netlify Status](https://api.netlify.com/api/v1/badges/b6c8e376-749e-4c74-901c-7034a7479708/deploy-status)
![Vue.js](https://img.shields.io/badge/vue.js-2.6.11-green)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-2.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Conversor de bases numéricas (Binário ↔ Decimal) desenvolvido com Vue.js e Tailwind CSS. Este projeto tem como objetivo estudar a criação de interfaces modernas e responsivas, além de explorar conceitos de conversão de bases matemáticas.

---

# 🎯 Objetivo do Projeto

Fornecer uma ferramenta simples e eficiente para conversão entre sistemas numéricos, garantindo:
- **Interface Intuitiva**: Design limpo e fácil de usar com abas de navegação.
- **Feedback Imediato**: Conversão rápida e precisa entre binário e decimal.
- **Conteúdo Educativo**: Explicações claras sobre o funcionamento dos sistemas numéricos.
- **Responsividade**: Layout adaptável para diferentes dispositivos.

Foco em:
- Estrutura de componentes reutilizáveis.
- Estilização utilitária com Tailwind CSS.
- Gerenciamento de estado e rotas com Vue Ecosystem.

---

# 🧠 Estratégia e Arquitetura

O projeto foi construído como uma Single Page Application (SPA) utilizando o ecossistema Vue.js:

1.  **Core Framework**: Vue.js 2 para reatividade e composição de interface.
2.  **Estilização**: Tailwind CSS para design rápido e consistente.
3.  **Roteamento**: Vue Router para navegação entre views.
4.  **Estado Global**: Vuex (configurado para expansão futura).
5.  **Componentização**:
    - `src/components/header`: Cabeçalhos dinâmicos.
    - `src/components/tab`: Sistema de abas para alternar modos de conversão.
    - `src/components/chart`: Componentes de visualização de dados (ApexCharts).
6.  **Linting & Formatação**: ESLint + Prettier + Husky para padronização de código.

Diretrizes técnicas:
- Clean Code e separação de responsabilidades.
- Uso de componentes funcionais e props para comunicação.
- Configuração de build otimizada com Vue CLI.

---

# 🔄 Fluxos Cobertos

1.  **Conversão Binário para Decimal**
    - Entrada de número binário (0 e 1).
    - Validação e cálculo automático.
    - Exibição do resultado decimal.

2.  **Conversão Decimal para Binário**
    - Entrada de número decimal.
    - Cálculo de divisões sucessivas (lógica interna).
    - Exibição do resultado binário.

3.  **Interface de Usuário**
    - Alternância entre modos via Abas (Tabs).
    - Seção explicativa sobre sistemas numéricos.

---

# 📁 Estrutura do Projeto

```
src/
  assets/                  # Imagens e estilos globais (SCSS)
  components/              # Componentes reutilizáveis
    chart/                 # Gráficos (ApexCharts)
    header/                # Componentes de cabeçalho
    modal/                 # Modais e diálogos
    tab/                   # Lógica de abas
  router/                  # Configuração de rotas (Vue Router)
  store/                   # Gerenciamento de estado (Vuex)
  views/                   # Páginas principais (Home.vue)
  App.vue                  # Componente raiz
  main.js                  # Ponto de entrada
public/                    # Arquivos estáticos
.husky/                    # Hooks do Git
```

---

# ⚙️ Funcionalidades Automatizadas

## Conversão Bidirecional
- Lógica implementada para transformar strings binárias em inteiros e vice-versa.
- Atualização reativa da interface.

## Validação e Linting
- Pipeline de commit com Husky e Commitlint para garantir mensagens semânticas.
- Lint-staged rodando ESLint em arquivos modificados.

---

# 🧪 Boas Práticas

- **Componentização**: Interface quebrada em pequenos componentes (Buttons, Inputs, Tabs).
- **Estilo Utilitário**: Uso extensivo de classes Tailwind para evitar CSS global complexo.
- **Padronização**: Regras de ESLint e Prettier para manter o código limpo.
- **Git Hooks**: Prevenção de commits fora do padrão (Conventional Commits).

---

# 🛠️ Tecnologias

- **Vue.js 2**: Framework progressivo.
- **Tailwind CSS**: Framework CSS utilitário.
- **ApexCharts**: Biblioteca de gráficos interativos.
- **Vue Router & Vuex**: Roteamento e Estado.
- **Node.js**: Ambiente de desenvolvimento.

---

# ▶️ Como Executar

1) Instalar dependências
```bash
npm install
```

2) Executar servidor de desenvolvimento (HMR)
```bash
npm run serve
```
O projeto estará disponível em `http://localhost:8080`.

3) Build para produção
```bash
npm run build
```

4) Lint e Fix
```bash
npm run lint
```

---

# 📄 Deploy e Demonstração

O projeto está implantado e disponível para acesso:
- **Demo**: [https://decimal2bin.netlify.app/](https://decimal2bin.netlify.app/)

---

# 🤝 Conclusão

O **Bin2Dec** é um exemplo prático de aplicação web moderna, demonstrando como ferramentas como Vue.js e Tailwind CSS podem ser combinadas para criar interfaces funcionais e elegantes de forma rápida.

---
