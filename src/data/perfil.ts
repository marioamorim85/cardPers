export type Perfil = {
  nome: string
  curso: string
  ano: string
  interesses: string[]
  procuraEstagio: boolean
}

export const perfil: Perfil = {
    nome: 'Mário Amorim',
    curso: 'DS',
    ano: '2.º ano',
    interesses: ['React', 'UX', 'Jogos', 'IA'],
    procuraEstagio: true,
}