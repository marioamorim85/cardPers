import { useNavigate } from 'react-router-dom'
import Etiqueta from '../components/Etiqueta'
import Seccao from '../components/Seccao'
import { perfil } from '../data/perfil'
import { projetos } from '../data/projetos'

function PerfilPage() {

  const navigate = useNavigate()

  const projetosConcluidos = projetos.filter((projeto) => projeto.concluido)

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

        <div className='mt-8'>
          <Seccao titulo="Sobre mim">
            <p className="mt-3 leading-7 text-slate-600">
              Sou estudante de Desenvolvimento de Software e tenho
              interesse em desenvolvimento Web, React, Inteligência
              Artificial e experiência de utilizador.
            </p>
          </Seccao>
        </div>

        <div className='mt-8'>
          <Seccao titulo="Interesses">
            <div className="mt-4 flex gap-3">
              {perfil.interesses.map((interesse) => (
                <Etiqueta key={interesse} texto={interesse} />
              ))}
            </div>
          </Seccao>
        </div>

        <div className="mt-8">
          <Seccao titulo={`Projetos Concluídos (${projetosConcluidos.length})`}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projetosConcluidos.length > 0 ? (
                projetosConcluidos.map((projeto) => (
                  <article
                    key={projeto.id}
                    className="flex flex-col rounded-xl border border-slate-200 p-4"
                  >
                    <h3 className="font-bold text-slate-800">{projeto.nome}</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {projeto.descricao}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-3">
                      {projeto.tecnologias.map((tecnologia) => (
                        <Etiqueta key={tecnologia} texto={tecnologia} />
                      ))}
                      <Etiqueta texto="Concluído" destaque />
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-slate-600 sm:col-span-2">
                  Ainda não há projetos concluídos.
                </p>
              )}
            </div>
          </Seccao>
        </div>

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