export type Projeto = {
  id: number
  nome: string
  descricao: string
  tecnologias: string[]
  concluido: boolean
}

export const projetos: Projeto [] = [
    {
        id: 1,
        nome: "Cartão de Perfil",
        descricao: "Primeiro ecrã em React com Tailwind",
        tecnologias: ["React", "Tailwind"],
        concluido: false,
    },
    {
        id: 2,
        nome: "Loja de teclados",
        descricao: "Catálogo com preços e IVA",
        tecnologias: ["Typescript",],
        concluido: false,
    },
     {
        id: 3,
        nome: "Portfólio Pessoal",
        descricao: "Página para apresentar os meus projetos e interesses",
        tecnologias: ["Typescript", "React", "Tailwind"],
        concluido: false,
    }
]