export interface MovieTrailer {
    iso_639_1: string;  // Idioma del trailer (por ejemplo, 'en' para inglés)
    iso_3166_1: string; // Código del país (por ejemplo, 'US' para Estados Unidos)
    name: string;       // Nombre del trailer
    key: string;        // Clave del trailer en YouTube
    site: string;       // Sitio donde se aloja el video (por ejemplo, 'YouTube')
    size: number;       // Tamaño del video (resolución, por ejemplo, 1080p)
    type: string;       // Tipo de video (por ejemplo, 'Trailer')
    official: boolean;  // Si es el trailer oficial o no
    published_at: string;  // Fecha de publicación en formato ISO 8601
    id: string;         // ID único del trailer
}