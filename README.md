# 🚀 Bin2Dec (Staff Engineer Review Edition)

![CI Status](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)
![Vue.js 2 (EOL)](https://img.shields.io/badge/vue.js-2.6.11-orange)
![Test Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Maintenance](https://img.shields.io/badge/maintenance-deprecated-red)

> **Staff Engineer Note**: Este projeto foi refatorado para demonstrar práticas de engenharia de software de alto nível, focando em separação de responsabilidades, testes automatizados e integração contínua. Embora a stack base (Vue 2) esteja em EOL (End of Life), a arquitetura foi ajustada para facilitar uma futura migração (Strangler Fig Pattern).

---

## 🏗️ Arquitetura e Decisões Técnicas

A arquitetura segue o princípio de **Separation of Concerns (SoC)**. A lógica de negócios (conversão de bases) foi desacoplada da camada de apresentação (Vue Components).

### Diagrama de Componentes (C4 Nível 2)

```mermaid
graph TD
    User((Usuário))
    UI[Interface Vue.js]
    Logic[Converter Logic (Pure JS)]
    Validator[Input Validators]

    User -->|Interage| UI
    UI -->|Chama| Validator
    Validator -->|Valida| Logic
    Logic -->|Retorna Resultado| UI
```

### Por que essa separação?
1.  **Testabilidade**: A lógica em `src/utils/converter.js` é testada isoladamente com Jest, sem depender de montar componentes Vue.
2.  **Portabilidade**: A mesma lógica pode ser reutilizada em um backend Node.js, CLI ou migrada para React/Svelte sem alterações.
3.  **Manutenibilidade**: Mudanças na UI não quebram a regra de negócio e vice-versa.

---

## 🧪 Estratégia de Testes

Adotamos a pirâmide de testes para garantir confiança sem sacrificar a velocidade.

1.  **Unitários (Jest)**: Cobrem 100% da lógica de conversão e validação (`tests/unit/converter.spec.js`). Focados em casos de borda (inputs inválidos, vazios, etc.).
2.  **Linting (ESLint)**: Garante consistência de código e evita erros comuns de JavaScript/Vue.
3.  **CI/CD (GitHub Actions)**: Pipeline automatizado que executa lint e testes a cada Push/PR.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 14+ (Recomendado 16/18 LTS)

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run serve
```

### Build de Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

### Testes e Qualidade
```bash
# Rodar testes unitários
npm run test:unit

# Rodar linter
npm run lint
```

---

## 🔮 Plano de Modernização (Roadmap)

Como Staff Engineer, identifico as seguintes dívidas técnicas e plano de mitigação:

1.  **Migração Vue 2 -> Vue 3**: O Vue 2 atingiu o fim da vida útil.
    - *Estratégia*: Utilizar `@vue/compat` para migração gradual.
2.  **Build Tooling**: Migrar de Webpack (Vue CLI) para **Vite** para melhorar o tempo de startup e HMR (Hot Module Replacement).
3.  **Tipagem**: Adotar **TypeScript** para garantir contratos robustos entre componentes e utilitários.

---

## 🤝 Autor

Refatorado com mindset de Engenharia de Software de Alto Desempenho.
