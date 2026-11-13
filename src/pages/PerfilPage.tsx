import { useNavigate } from "react-router-dom";
import Etiqueta from "../components/Etiqueta";
import Seccao from "../components/Seccao";
import { perfil } from "../data/perfil";
// import { projetos } from "../data/projetos";
import { projetos, type Projeto } from "../data/projetos";
import React, { useState } from "react";

type Filtro = `todos` | `concluidos` | `emCurso`;

function PerfilPage() {
  const navigate = useNavigate();

  const [filtro, setFiltro] = useState<Filtro>("todos");

  // O estado da pesquisa, começa em string vazia
  // porque no início o utilizador ainda não escreveu nada

  const [pesquisa, setPesquisa] = useState("");
  // A lista deixar de ser o ficheiro e passa a ser o estado
  const [listaProjetos, setListaProjetos] = useState<Projeto[]>(projetos);
  // Mensagem de sucesso
  const [mensagem, setMensagem] = useState("");

  // Um estado por campo do formulário
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [concluido, setConcluido] = useState(false);

  // Um único filter com as duas condições
  const projetosVisiveis = listaProjetos.filter((projeto) => {
    //confirmar se o projecto corresponde à categoria selecionada
    const passarFiltro = 
      filtro === "todos" ||
      (filtro === "concluidos" && projeto.concluido) ||
      (filtro === "emCurso" && !projeto.concluido);

    // Confirma se o nome contém a pesquisa, sem distingui maúsculas
    const passaPesquisa = projeto.nome.toLowerCase()
          .includes(pesquisa.toLowerCase())

    // O projecto precisa corresponder aos dois critérios
    return passarFiltro && passaPesquisa;
  });

  // Função para adicionar um novo projeto
  function adicionarProjeto(evento: React.FormEvent) {
    // Trava o comportamento do HTML, que era recarregar a página
    evento.preventDefault();

    // Campo obrigatório: sem nome não se cria nada
    if (nome.trim() === "") return;

    // ID novo: o maior que existe mais um
    const idNovo = Math.max(0, ...listaProjetos.map((p) => p.id)) + 1;
    
    // o input é um string. O Projecto quer um array
    const listaTecnologias = tecnologias
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");
    
    const projetoNovo: Projeto = {
      id: idNovo,
      nome: nome.trim(),
      descricao: descricao.trim(),
      tecnologias: listaTecnologias,
      concluido: concluido,
    }

    // Array novo com o que lá estava mais o novo
    // Nunca listaProjetos.push: muda o array no sitio
    // e o React não dá por nada
    setListaProjetos([...listaProjetos, projetoNovo]);

    // Limpar o formulário
    setNome("");
    setDescricao("");
    setTecnologias("");
    setConcluido(false);

    // Guarda a mensagem. Usa o nome antes de o estado ser limpo
    setMensagem(`Projeto "${projetoNovo.nome}" adicionado com sucesso`)
  }

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

            {/* O campo de pesquisa, por cima dos botões */}
            <input
                type="text"
                // value liga o ecrã ao estado: o estado manda no que se vê
                value={pesquisa}
                // onChange liga o ecrâ de valta ao estado:
                // a cada tecla, evento.target.value traz o texto completo na caixa
                onChange={(evento)=> setPesquisa(evento.target.value)}
                placeholder="Pesquisar projecto..."
                className="mb-4 w-full rounded-lg border border-slate-300 px-4
                            py-2 text-slate-700 placeholder:text-slate-400
                            focus:border-slate-500 focus:outline-none" 
            />

            {/* onSubmit no form, nao onClick no botão */}

            <form 
              onSubmit = {adicionarProjeto}
              className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="mb-3 font-bold text-slate-700">Novo projecto</h3>

              <input 
                type="text"
                value={nome}
                onChange={(evento) => {
                  setNome(evento.target.value);
                  setMensagem("");
                }} 
                placeholder="Nome do projeto"
                className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              />

              <input 
                type="text"
                value={descricao}
                onChange={(evento) => setDescricao(evento.target.value)} 
                placeholder="Descrição"
                className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              />

              <input 
                type="text"
                value={tecnologias}
                onChange={(evento) => setTecnologias(evento.target.value)} 
                placeholder="Tecnologias, seraradas por vírgula"
                className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              />

              <label className="mb-3 flex items-center gap-2 text-slate-700">
                <input 
                  type="checkbox" 
                  checked={concluido}
                  onChange={(evento) => setConcluido(evento.target.checked)}
                  className="h-4 w-4"
                />
                Já está concluído
              </label>

              {/* Só aparece quando a mensagem não está vazia */}
              {mensagem !== "" &&
                <p role="status" className="mb-3 rounded-lg bg-green-100
                px-3 py-2 text-green-800">
                  {mensagem}
                </p>
              }

              <button
                type="submit"
                disabled={nome.trim() === ""}
                className="rounded-lg bg-slate-700 px-5 py-2 font-semibold text-white
                          hover:bg-slate-800 disabled:cursor-not-allowed:opacity-40" 
              >
                Adicionar
              </button>
            </form>


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
                        <Etiqueta texto="Em curso" emCurso/>
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
