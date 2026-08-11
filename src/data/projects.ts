export interface ProjectRelatedProduct {
  label: string
  to: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  location?: string
  description: string
  image: string
  gallery: string[]
  highlights: string[]
  relatedProducts: ProjectRelatedProduct[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "planta-envasadora-en-dur-n",
    title: "Planta Envasadora en Durán",
    category: "Plantas Envasadoras",
    location: "Durán",
    description: "Planta integral de purificación para envasado comercial con tecnología de ósmosis inversa y desinfección avanzada.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 2,
    slug: "planta-envasadora-en-milagro",
    title: "Planta Envasadora en Milagro",
    category: "Plantas Envasadoras",
    location: "Milagro",
    description: "Sistema industrial optimizado de alta pureza para envasado de agua, garantizando una esterilización profunda.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432305/helisa/projects/dulc1cubzf6ejui44mbn.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432305/helisa/projects/dulc1cubzf6ejui44mbn.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432303/helisa/projects/tzxhcvuqiljjkwgkk3sy.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432304/helisa/projects/min03gdbg9h0sqtptibe.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432306/helisa/projects/ttgnwg1mwkpj1emi7rw1.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 3,
    slug: "planta-envasadora-en-playas",
    title: "Planta Envasadora en Playas",
    category: "Plantas Envasadoras",
    location: "Playas",
    description: "Tratamiento multicapa con dosificación automatizada para asegurar la máxima calidad en el envasado de agua.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432278/helisa/projects/xspjreifaj0rya2mrhmm.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432278/helisa/projects/xspjreifaj0rya2mrhmm.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432279/helisa/projects/l6bfpifz0a4fipp1dz2b.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432281/helisa/projects/xi8zjqy4ph9coz5638pq.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432282/helisa/projects/dr7iprctckstlsoytc9k.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Post-Filtro",
      "Ozono",
      "Dosificadora"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Dosificadora",
        to: "/productos#dosificadoras"
      }
    ]
  },
  {
    id: 4,
    slug: "planta-envasadora-en-montalvo",
    title: "Planta Envasadora en Montalvo",
    category: "Plantas Envasadoras",
    location: "Montalvo",
    description: "Equipamiento industrial de alta eficiencia diseñado para cumplir los más altos estándares sanitarios de purificación.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432293/helisa/projects/spbvqwsxrpfuknrnot05.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432293/helisa/projects/spbvqwsxrpfuknrnot05.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432295/helisa/projects/koro4chf4qvvtiezb4nz.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432297/helisa/projects/jfw2ziyde9kyeylwew7f.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 5,
    slug: "planta-envasadora-en-portoviejo",
    title: "Planta Envasadora en Portoviejo",
    category: "Plantas Envasadoras",
    location: "Portoviejo",
    description: "Riguroso proceso de acondicionamiento físico-químico y ósmosis inversa para una purificación 100% segura.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432308/helisa/projects/h8cmrmrfxrasebyguycl.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432308/helisa/projects/h8cmrmrfxrasebyguycl.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432309/helisa/projects/hlixuftqrmckwvtuafq5.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432311/helisa/projects/yyh5ebtv3zg97clnobku.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 6,
    slug: "planta-envasadora-en-chipipe",
    title: "Planta Envasadora en Chipipe",
    category: "Plantas Envasadoras",
    location: "Chipipe",
    description: "Proceso altamente eficiente de filtración y esterilización UV para obtener un producto cristalino y libre de impurezas.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432300/helisa/projects/fihym032k2i8cmczfh0o.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432300/helisa/projects/fihym032k2i8cmczfh0o.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432298/helisa/projects/hvjtkcexu9brwfhrzqng.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432299/helisa/projects/gnsilnetaogimpmkjovr.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432301/helisa/projects/yushsd4fgd5jb4ict1mg.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 7,
    slug: "planta-envasadora-en-la-regi-n-amaz-nica",
    title: "Planta Envasadora en la Región Amazónica",
    category: "Plantas Envasadoras",
    location: "la Región Amazónica",
    description: "Planta de alta complejidad que integra ultrafiltración para superar los desafíos más exigentes del agua local.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432285/helisa/projects/mmsn7h7fkwgqhyjtjtnq.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432285/helisa/projects/mmsn7h7fkwgqhyjtjtnq.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432283/helisa/projects/tw6ddxdxhamu2nmlmm4r.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432284/helisa/projects/dvfkj4jy9ee1isfrhy8b.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432286/helisa/projects/jtlcogmqpq2r7gcpjq9c.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432287/helisa/projects/mox0ky0gmwpgz86hplti.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432289/helisa/projects/yjboqo2czduxvdywfwfp.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultrafiltración",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 8,
    slug: "planta-de-purificaci-n-en-campamento-petrolero",
    title: "Planta de Purificación en Campamento Petrolero",
    category: "Plantas Envasadoras",
    location: "Campamento Petrolero",
    description: "Suministro de agua potable seguro y constante, diseñado específicamente para operaciones industriales exigentes.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432290/helisa/projects/exj3szc72ybx6gqteydc.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432290/helisa/projects/exj3szc72ybx6gqteydc.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432291/helisa/projects/gqt8krlomtmjvlkeg5km.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432292/helisa/projects/zc8ffu7d4ijy35xocabq.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 9,
    slug: "granja-en-loja",
    title: "Granja en Loja",
    category: "Sector Agrícola",
    location: "Loja",
    description: "Tratamiento de agua eficiente para optimizar la sanidad agrícola mediante sistemas de filtración y desinfección profunda con ozono.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ozono"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      }
    ]
  },
  {
    id: 10,
    slug: "raja-majester",
    title: "Raja Majester",
    category: "Sector Agrícola",
    location: "Ecuador",
    description: "Purificación integral para asegurar agua de alta calidad en procesos de cultivo, mejorando el rendimiento agrícola y previniendo incrustaciones.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 11,
    slug: "agr-cola-dole",
    title: "Agrícola Dole",
    category: "Sector Agrícola",
    location: "Ecuador",
    description: "Sistema industrial de tratamiento de agua diseñado para cumplir con las más estrictas normativas internacionales de calidad y exportación.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 12,
    slug: "av-cola-la-gloria",
    title: "Avícola La Gloria",
    category: "Sector Agrícola",
    location: "Ecuador",
    description: "Planta de alta tecnología diseñada para garantizar agua biológicamente segura, maximizando el rendimiento, la conversión y la sanidad avícola.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Post-Filtro",
      "Dosificadora",
      "Ultrafiltración"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Dosificadora",
        to: "/productos#dosificadoras"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      }
    ]
  },
  {
    id: 13,
    slug: "planta-de-faenamiento-de-pollo",
    title: "Planta de Faenamiento de Pollo",
    category: "Sector Agrícola",
    location: "Ecuador",
    description: "Acondicionamiento especializado de agua para faenamiento avícola, garantizando la total inocuidad alimentaria y el cumplimiento de estándares sanitarios.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      }
    ]
  },
  {
    id: 14,
    slug: "av-cola-en-bucay",
    title: "Avícola en Bucay",
    category: "Sector Agrícola",
    location: "Bucay",
    description: "Desinfección avanzada y ablandamiento para optimizar la calidad del agua de consumo animal, protegiendo la salud en toda la cadena de producción.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Post-Filtro",
      "Ozono"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      }
    ]
  },
  {
    id: 15,
    slug: "celec",
    title: "CELEC",
    category: "Sector Industrial",
    location: "Ecuador",
    description: "Sistema de ultra pureza para el sector energético. Combina ultrafiltración y ósmosis inversa para proteger equipos industriales críticos y garantizar operaciones eficientes y seguras.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ósmosis Inversa",
      "Ultravioleta",
      "Post-Filtro",
      "Dosificadora",
      "Ultrafiltración"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Dosificadora",
        to: "/productos#dosificadoras"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      }
    ]
  },
  {
    id: 16,
    slug: "f-brica-de-bloques-de-cemento",
    title: "Fábrica de Bloques de Cemento",
    category: "Sector Industrial",
    location: "Ecuador",
    description: "Purificación de agua industrial para optimizar la calidad de los materiales de construcción, previniendo daños e incrustaciones en la maquinaria mediante ablandamiento y ósmosis inversa.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 17,
    slug: "azucarera-en-puerto-inca",
    title: "Azucarera en Puerto Inca",
    category: "Sector Industrial",
    location: "Puerto Inca",
    description: "Acondicionamiento de agua para la producción azucarera y gestión ambiental sostenible mediante una Planta de Tratamiento de Aguas Residuales (PTAR) de alta capacidad.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "PTAR"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "PTAR",
        to: "/productos#ptar"
      }
    ]
  },
  {
    id: 18,
    slug: "dafusa",
    title: "DAFUSA",
    category: "Sector Industrial",
    location: "Ecuador",
    description: "Solución avanzada de tratamiento industrial de alta eficiencia. Garantiza agua completamente libre de impurezas para procesos de manufactura mediante ultrafiltración y oxidación con ozono.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ultrafiltración",
      "Ósmosis Inversa",
      "Post-Filtro",
      "Ozono"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      }
    ]
  },
  {
    id: 19,
    slug: "centro-de-di-lisis",
    title: "Centro de Diálisis",
    category: "Sector Salud",
    location: "Ecuador",
    description: "Tratamiento de agua de grado médico que garantiza agua ultrapura para procesos de hemodiálisis, cumpliendo con los más estrictos estándares de bioseguridad y protección al paciente.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro",
      "Ultrafiltración"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      }
    ]
  },
  {
    id: 20,
    slug: "laboratorio-de-productos-inyectables",
    title: "Laboratorio de Productos Inyectables",
    category: "Sector Salud",
    location: "Ecuador",
    description: "Purificación de máxima exigencia para la industria farmacéutica. Sistema integral que asegura la total esterilidad y calidad del agua para la elaboración de medicamentos.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro",
      "Ultrafiltración",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ultrafiltración",
        to: "/productos#ultrafiltracion"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 21,
    slug: "hospital-miguel-h-alc-var",
    title: "Hospital Miguel H. Alcívar",
    category: "Sector Salud",
    location: "Ecuador",
    description: "Acondicionamiento y esterilización de agua para red hospitalaria, previniendo riesgos sanitarios y garantizando un suministro biológicamente seguro para uso clínico y general.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Post-Filtro",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 22,
    slug: "finca-bucay",
    title: "Finca Bucay",
    category: "Tratamiento Hogar",
    location: "Ecuador",
    description: "Acondicionamiento de agua residencial que elimina la dureza, protegiendo tuberías y electrodomésticos mientras garantiza un suministro totalmente limpio.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432322/helisa/projects/z30vrxuz8havvoypmplj.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432322/helisa/projects/z30vrxuz8havvoypmplj.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432324/helisa/projects/joeladvn7qdyrnfvwcoy.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 23,
    slug: "parque-en-v-a-a-la-costa",
    title: "Parque en Vía a la Costa",
    category: "Tratamiento Hogar",
    location: "Vía a la Costa",
    description: "Sistema de filtración y esterilización para áreas recreativas, asegurando agua libre de bacterias para el bienestar y seguridad de la comunidad.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 24,
    slug: "edificio-helisa",
    title: "Edificio Helisa",
    category: "Tratamiento Hogar",
    location: "Ecuador",
    description: "Purificación integral centralizada para instalaciones corporativas y residenciales, garantizando un flujo de agua biológicamente segura en todos los puntos.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432320/helisa/projects/gxmfkimoxsdwav28n9m7.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432320/helisa/projects/gxmfkimoxsdwav28n9m7.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432319/helisa/projects/a3yp3jqnpvqksplpps72.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432321/helisa/projects/maximodyjpi8mhzb828s.png"
    ],
    highlights: [
      "Filtros",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 25,
    slug: "casa-en-ol-n",
    title: "Casa en Olón",
    category: "Tratamiento Hogar",
    location: "Olón",
    description: "Solución premium para hogares costeros. Integra ósmosis inversa y desinfección UV para beber agua de la más alta pureza directamente del grifo.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ósmosis Inversa",
      "Post-Filtro",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ósmosis Inversa",
        to: "/productos#osmosis-inversa"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 26,
    slug: "casas-en-la-puntilla-samborond-n",
    title: "Casas en La Puntilla, Samborondón",
    category: "Tratamiento Hogar",
    location: "La Puntilla, Samborondón",
    description: "Sistema residencial de lujo que elimina el sarro para proteger acabados y grifería fina, brindando esterilización continua para el cuidado de toda la familia.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 27,
    slug: "casa-en-laguna-sol-samborond-n",
    title: "Casa en Laguna Sol, Samborondón",
    category: "Tratamiento Hogar",
    location: "Laguna Sol, Samborondón",
    description: "Tratamiento de agua residencial de máxima tecnología. Combina desinfección por ozono y luz UV con ablandamiento para un confort y salud total en el hogar.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 28,
    slug: "casa-en-estancias-del-r-o-samborond-n",
    title: "Casa en Estancias del Río, Samborondón",
    category: "Tratamiento Hogar",
    location: "Estancias del Río, Samborondón",
    description: "Purificación avanzada para el hogar. Garantiza agua suave y libre de microorganismos mediante la potente acción combinada de ozono, UV y filtración.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ultravioleta",
      "Ozono",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 29,
    slug: "universidad-de-guayaquil",
    title: "Universidad de Guayaquil",
    category: "Sector Educativo",
    location: "Ecuador",
    description: "Sistema de purificación integral para campus universitario. Garantiza hidratación segura y bioseguridad estudiantil mediante desinfección avanzada con ozono y luz UV.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ultravioleta",
      "Ozono"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      }
    ]
  },
  {
    id: 30,
    slug: "colegio-teniente-hugo-ortiz",
    title: "Colegio Teniente Hugo Ortiz",
    category: "Sector Educativo",
    location: "Ecuador",
    description: "Solución completa de hidratación escolar. Incorpora estaciones de bebederos con filtración y esterilización por ozono para proteger la salud diaria de los estudiantes.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ozono",
      "Bebederos"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      },
      {
        label: "Bebederos",
        to: "/productos#bebederos"
      }
    ]
  },
  {
    id: 31,
    slug: "colegio-xavier",
    title: "Colegio Xavier",
    category: "Sector Educativo",
    location: "Ecuador",
    description: "Tratamiento de agua para instituciones educativas. Asegura un suministro biológicamente seguro y libre de dureza mediante filtración y esterilización UV continua.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 32,
    slug: "colegio-en-dur-n",
    title: "Colegio en Durán",
    category: "Sector Educativo",
    location: "Durán",
    description: "Acondicionamiento de agua escolar que elimina impurezas físicas y previene incrustaciones, brindando un entorno más seguro y saludable para toda la comunidad educativa.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 33,
    slug: "orion-oriente-agua-residual",
    title: "Orion Oriente Agua Residual",
    category: "Potabilización y PTAR",
    location: "Ecuador",
    description: "Tratamiento especializado de aguas residuales. Integra sistemas de filtración y dosificación automatizada para garantizar una gestión ambiental sostenible y el cumplimiento normativo de efluentes.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "PTAR",
      "Dosificadora"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "PTAR",
        to: "/productos#ptar"
      },
      {
        label: "Dosificadora",
        to: "/productos#dosificadoras"
      }
    ]
  },
  {
    id: 34,
    slug: "barco-tur-stico",
    title: "Barco Turístico",
    category: "Sector de Turismo",
    location: "Ecuador",
    description: "Sistema de desalinización y purificación a bordo para turismo marítimo. Garantiza agua potable segura y de alta calidad para los pasajeros mediante filtración y esterilización UV continua.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Desalinización",
      "Filtros",
      "Ultravioleta"
    ],
    relatedProducts: [
      {
        label: "Desalinización",
        to: "/productos#desalinizacion"
      },
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ultravioleta",
        to: "/productos#esterilizacion-uv"
      }
    ]
  },
  {
    id: 35,
    slug: "sonesta",
    title: "Sonesta",
    category: "Sector de Turismo",
    location: "Ecuador",
    description: "Acondicionamiento de agua de alto rendimiento para el sector hotelero. Elimina la dureza del agua para proteger las instalaciones y ofrecer el máximo confort en la experiencia de los huéspedes.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Post-Filtro"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Post-Filtro",
        to: "/productos#post-filtros"
      }
    ]
  },
  {
    id: 36,
    slug: "petroecuador",
    title: "Petroecuador",
    category: "Industria Petrolera",
    location: "Ecuador",
    description: "Sistema de filtración industrial de alta capacidad diseñado para operaciones petroleras, asegurando el cumplimiento de estrictos estándares de calidad y máxima eficiencia operativa.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg"
    ],
    highlights: [
      "Filtros"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      }
    ]
  },
  {
    id: 37,
    slug: "repsol-duragas",
    title: "Repsol-Duragas",
    category: "Industria Petrolera",
    location: "Ecuador",
    description: "Soluciones de tratamiento avanzado para procesos industriales críticos. Integra ablandamiento y desinfección con ozono para optimizar la seguridad y el rendimiento de las operaciones.",
    image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432348/helisa/projects/wfigte1jjsvsxaacvfae.png",
    gallery: [
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432348/helisa/projects/wfigte1jjsvsxaacvfae.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432345/helisa/projects/rf8iqq4jrkbsubtwyxft.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432346/helisa/projects/vuuniowt6rtnldwm7uyi.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432349/helisa/projects/ajap2uv45nrqjlomsna6.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432350/helisa/projects/r4xrp6aeulkivfj83mvr.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432351/helisa/projects/b2r0ebyn1sdxi9fl5k6v.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432353/helisa/projects/rbwtffged3hziaf3imhn.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432354/helisa/projects/oeoxmwoafefuzmepkxxd.png",
      "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783432355/helisa/projects/ixh8unl5mtj4ija6v0b1.png"
    ],
    highlights: [
      "Filtros",
      "Ablandador",
      "Ozono"
    ],
    relatedProducts: [
      {
        label: "Filtros",
        to: "/productos#filtros"
      },
      {
        label: "Ablandador",
        to: "/productos#ablandadores"
      },
      {
        label: "Ozono",
        to: "/productos#ozono"
      }
    ]
  }
];

export const projectCategories = [
  "Industria Petrolera",
  "Plantas Envasadoras",
  "Potabilización y PTAR",
  "Sector Agrícola",
  "Sector Educativo",
  "Sector Industrial",
  "Sector Salud",
  "Sector de Turismo",
  "Todos",
  "Tratamiento Hogar"
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
