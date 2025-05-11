# Timer React
Este projeto é um Timer desenvolvido em React, utilizando diversas tecnologias modernas do ecossistema React.

## Funcionalidades
- Cadastro de tarefas com tempo determinado
- Histórico de ciclos realizados, interrompidos e em andamento
- Persistência de dados no localStorage

## Tecnologias Utilizadas
- **React**
- **TypeScript**
- **Styled Components**
- **Immer**
- **React Hook Form**
- **Zod**
- **date-fns**
- **React Router DOM**

1. **Clone o repositório**
   ```bash
    git clone https://github.com/gnneto/Timer-react.git
    cd Timer-react
    ```
2. Instale as dependências
   ```bash
    npm install
   ```
3. Inicie o servidor de desenvolvimento
    ```bash
    npm run dev
    ```
    
## Estrutura de Pastas
```plaintext
Timer-react/
├── src/
│   ├── contexts/           # Contextos React (ex: CyclesContext)
│   ├── pages/              # Páginas principais (Home, History)
│   │   └── Home/
│   │   └── History/
│   ├── reducers/           # Reducers e actions para controle de estado
│   ├── styles/             # Temas e estilos globais
│   ├── App.tsx             # Componente principal da aplicação
│   ├── main.tsx            # Ponto de entrada do React
│   └── Router.tsx          # Definição das rotas
├── index.html              # HTML principal
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
└── vite.config.ts          # Configuração do Vite
```
