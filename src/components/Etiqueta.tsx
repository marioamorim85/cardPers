// type EtiquetaProps = {
//   texto: string;
//   variante?: "normal" | "aviso";
// };

// export default function Etiqueta({ texto, variante = "normal" }: EtiquetaProps) {
//     const cores = variante === "aviso" ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-800";

//     return (
//         <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${cores}`}>
//             {texto}
//         </span>
//     );
// }

type EtiquetaProps = {
    texto: string;
    destaque?: boolean;
};

export default function Etiqueta({ 
    texto, 
    destaque = false,
}: EtiquetaProps) {
    const cores = destaque
        ? "bg-emerald-100 text-emerald-800"
        : 'bg-sky-100 text-sky-800';
    const tamanho = destaque ? "px-6 py-3" : "px-5 py-2";

    return (
        <span className={`inline-flex items-center rounded-full font-semibold ${tamanho} ${cores}`}>
            {texto}
        </span>
    );
}
