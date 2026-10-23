import { useNavigate } from 'react-router-dom'
import Etiqueta from '../components/Etiqueta'
import Seccao from '../components/Seccao'
import { perfil } from '../data/perfil'

function PerfilPage() {

  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-slate-800">
          {perfil.nome}
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Desenvolvimento de Software · 2.º ano
        </p>

        {/* <div className="mt-8">

          <h2 className="text-xl font-bold text-slate-700">
            Sobre mim
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Sou estudante de Desenvolvimento de Software e tenho
            interesse em desenvolvimento Web, React, Inteligência
            Artificial e experiência de utilizador.
          </p>

        </div> */}

        <Seccao titulo="Sobre mim">
          <p className="mt-3 leading-7 text-slate-600">
            Sou estudante de Desenvolvimento de Software e tenho
            interesse em desenvolvimento Web, React, Inteligência
            Artificial e experiência de utilizador.
          </p>
          </Seccao>

        <Seccao titulo="Interesses">
          <div className="mt-4 flex gap-3">
            {perfil.interesses.map((interesse) => (
              <Etiqueta key={interesse} texto={interesse} />
            ))}
          </div>
        </Seccao>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
        >
          ← Voltar
        </button>

      </div>

    </main>
  )
}

export default PerfilPage