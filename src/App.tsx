// Importa o hook useNavigate do react-router-dom 
// para navegação programática
import { useNavigate } from 'react-router-dom'
import Etiqueta from './components/Etiqueta'
import Avatar from './components/Avatar'
import Seccao from './components/Seccao'
import { perfil } from './data/perfil'
import { useState } from 'react'


// type Perfil = {
//   nome: string
//   curso: string
//   ano: string
//   interesses: string[]
//   procuraEstagio: boolean
// }

function App() {

  // navigate é uma função que permite navegar para diferentes
  // rota dentro da aplicação. É obtida através do hook useNavigate.
  const navigate = useNavigate()
  // O procura é um estado que indica se o perfil está à procura de estágio.
  const [procura, setProcura] = useState(perfil.procuraEstagio)
  
  // const perfil: Perfil = {
  //   nome: 'Mário Amorim',
  //   curso: 'DS',
  //   ano: '2.º ano',
  //   interesses: ['React', 'UX', 'Jogos', 'IA'],
  //   procuraEstagio: true,
  // }

  return (
    <main className="flex min-h-screen items-center 
                justify-center bg-slate-100 p-6">
      
      <div className="w-fit max-w-full rounded-4xl border
               border-slate-200 bg-white p-8 shadow-lg">

        {/* Cabeçalho */}
        <div className="flex items-center gap-6">

          {/* Avatar */}
          <Avatar nome={perfil.nome} />

          {/* Nome e curso */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {perfil.nome}
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              {perfil.curso} · {perfil.ano}
            </p>
          </div>

        </div>

        {/* Interesses */}
        {/* <div className="mt-10"> */}
          {/* <h2 className="mb-5 text-lg font-semibold text-slate-700">
            Interesses
          </h2> */}
        <div className='mt-8'>
          <Seccao titulo="Interesses">
            <div className="flex flex-wrap gap-3">
              {perfil.interesses.map((interesse) => (
                <Etiqueta key={interesse} texto={interesse} />
              ))}
            </div>
          </Seccao>
        </div>
        {/* </div> */}

        {/* Estágio */}
        <div className='mt-5'>
          {procura ? (
              <Etiqueta texto="À procura de estágio" destaque />
          ) : (
            <span className='inline-flex items-center rounded-full
                              bg-red-100 px-6 py-3 font-semibold
                               text-red-800'>
                  Não procura estágio.
            </span>
          )}
        </div>

        <div className='mt-8 flex flex-wrap gap-3'>
          {/* Botão de alternar procura de estágio */}
          <button
            onClick={() => setProcura((valorAtual) => !valorAtual)}
            className="mt-8 mr-1.5 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            {procura ? `Deixar de procurar estágio` : `Procura estágio`}
          </button>
          {/* Botão de navegação */}
          <button
            onClick={() => navigate('/perfil')}
            className="mt-8 mr-1.5 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Ver Perfil
          </button>
          <button
            onClick={() => navigate('/contador')}
            className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Contador
          </button>
        </div>

      </div>

    </main>
  )
}

export default App