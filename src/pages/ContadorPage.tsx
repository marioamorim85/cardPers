import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ContadorPage() {
  const navigate = useNavigate();

  const [contador, setContador] = useState(0)
  function contar() {
    setContador(contador + 1)
  }

  function descontar() {
    setContador((valorAtual) => Math.max(0, valorAtual-1))
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-800">Contador com useState</h1>

        <div className="mx-auto mt-8 flex h-32 w-32 items-center 
                        justify-center rounded-full bg-slate-100">
            <span className="text-6xl font-bold text-slate-800">
            {contador}
            </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
                onClick={contar}
                className="rounded-lg bg-slate-700 px-6 py-3
                font-semibold text-white hover:bg-slate-800"
            >
                Contar
            </button>

            <button
                onClick={descontar}
                disabled={contador === 0}
                className="rounded-lg bg-slate-700 px-6 py-3
                font-semibold text-white hover:bg-slate-800
                disabled:cursor-not-allowed disabled:opacity-40"
            >
                Descontar
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="rounded-lg bg-slate-700 px-6 py-3 
              font-semibold text-white hover:bg-slate-800"
            >
              ← Voltar
            </button>
        </div>
      </div>
    </main>
  );
}

export default ContadorPage;
