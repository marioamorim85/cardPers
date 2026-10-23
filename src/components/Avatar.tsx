import fotoPerfil from '../assets/mario1.jpg'

type AvatarProps = {
  nome: string
}

export default function Avatar({ nome }: AvatarProps) {
    return (
        <img
            src={fotoPerfil}
            alt={`Fotografia de ${nome}`}
            // shrink-0 para impedir que a imagem encolha em telas menores
            className="h-28 w-28 shrink-0 rounded-full object-cover"
          />
    );

}