// Importa o hook useNavigate do react-router-dom 
// para navegação programática
import { useNavigate } from 'react-router-dom'
import Etiqueta from './components/Etiqueta'
import Avatar from './components/Avatar'
import Seccao from './components/Seccao'
import { perfil } from './data/perfil'


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
  
  // const perfil: Perfil = {
  //   nome: 'Mário Amorim',
  //   curso: 'DS',
  //   ano: '2.º ano',
  //   interesses: ['React', 'UX', 'Jogos', 'IA'],
  //   procuraEstagio: true,
  // }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      
      <div className="w-full max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-lg">

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
        <Seccao titulo="Interesses">
          <div className="flex flex-wrap gap-3">
            {perfil.interesses.map((interesse) => (
              <Etiqueta key={interesse} texto={interesse} />
            ))}
          </div>
        </Seccao>
        {/* </div> */}

        {/* Estágio */}
        {perfil.procuraEstagio && (
          <div className="mt-5">
            <Etiqueta texto="À procura de estágio" destaque />
          </div>
        )}

        {/* Botão de navegação */}
        
        <button
          onClick={() => navigate('/perfil')}
          className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Ver Perfil
        </button>

      </div>

    </main>
  )
}

export default App