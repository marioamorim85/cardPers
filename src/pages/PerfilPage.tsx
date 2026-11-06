import { useNavigate } from "react-router-dom";
import Etiqueta from "../components/Etiqueta";
import Seccao from "../components/Seccao";
import { perfil } from "../data/perfil";
import { projetos } from "../data/projetos";
import { useState } from "react";

type Filtro = `todos` | `concluidos` | `emCurso`;

function PerfilPage() {
  const navigate = useNavigate();

  const [filtro, setFiltro] = useState<Filtro>("todos");

  const projetosVisiveis = projetos.filter((projeto) => {
    if (filtro === "concluidos") return projeto.concluido;
    if (filtro === "emCurso") return !projeto.concluido;

    return true;
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800">{perfil.nome}</h1>

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

        <div className="mt-8">
          <Seccao titulo="Sobre mim">
            <p className="mt-3 leading-7 text-slate-600">
              Sou estudante de Desenvolvimento de Software e tenho interesse em
              desenvolvimento Web, React, Inteligência Artificial e experiência
              de utilizador.
            </p>
          </Seccao>
        </div>

        <div className="mt-8">
          <Seccao titulo="Interesses">
            <div className="mt-4 flex gap-3">
              {perfil.interesses.map((interesse) => (
                <Etiqueta key={interesse} texto={interesse} />
              ))}
            </div>
          </Seccao>
        </div>

        <div className="mt-8">
          <Seccao titulo={`Projetos (${projetosVisiveis.length})`}>
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                onClick={() => setFiltro("todos")}
                aria-pressed={filtro === "todos"}
                className={`rounded-lg px-4 py-2 font-semibold ${
                  filtro === "todos"
                    ? "bg-slate-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Todos
              </button>

              <button
                onClick={() => setFiltro("concluidos")}
                aria-pressed={filtro === "concluidos"}
                className={`rounded-lg px-4 py-2 font-semibold ${
                  filtro === "concluidos"
                    ? "bg-slate-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Concluídos
              </button>

              <button
                onClick={() => setFiltro("emCurso")}
                aria-pressed={filtro === "emCurso"}
                className={`rounded-lg px-4 py-2 font-semibold ${
                  filtro === "emCurso"
                    ? "bg-slate-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Em curso
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projetosVisiveis.length > 0 ? (
                projetosVisiveis.map((projeto) => (
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

                      {projeto.concluido ? (
                        <Etiqueta texto="Concluído" destaque />
                      ) : (
                        <Etiqueta texto="Em curso" />
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-slate-600 sm:col-span-2">
                  Não há projetos para este filtro.
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
  );
}

export default PerfilPage;
