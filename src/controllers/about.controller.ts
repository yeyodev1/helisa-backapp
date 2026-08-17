import { Request, Response, NextFunction } from "express";
import { About } from "../models/About";

const DEFAULT_ABOUT = {
  storyImage: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg",
  storyParagraphs: [
    "HELISA representa el nacimiento de una vida más saludable. Nuestro propósito es ofrecer los mejores sistemas de tratamiento y purificación de agua y aire con respaldo de repuestos y atención personalizada en todo el Ecuador.",
    "Para nosotros el agua es movimiento, dinamismo, salud y energía. Cada sistema que instalamos lleva esa filosofía: transformar espacios para que respires y bebas con confianza.",
  ],
  values: [
    { title: "Capital Humano", desc: "Ambiente laboral excelente, proactivo e innovador.", icon: "fa-users" },
    { title: "Productos y Servicios", desc: "Alta calidad para ser líderes del mercado.", icon: "fa-circle-check" },
    { title: "Responsabilidad Social", desc: "Alianzas con fundaciones como Sembrando Sonrisas.", icon: "fa-heart" },
    { title: "Planeta", desc: "Responsabilidad ambiental ofreciendo agua y aire limpio.", icon: "fa-earth-americas" },
  ],
  timeline: [
    { year: "2003", title: "Fundación de HELISA", desc: "Apertura de nuestro primer local en Guayaquil, iniciando operaciones con la comercialización de equipos de tratamiento de agua y limpieza.", image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372958/helisa/projects/edificio-helisa.jpg" },
    { year: "2004", title: "Primer gran éxito", desc: "Participación destacada en una feria internacional. El respaldo familiar y las ventas récord impulsaron de forma decisiva el posicionamiento de la marca.", image: "/images/nave-tarimas.jpg" },
    { year: "2005", title: "Crecimiento continuo", desc: "Gracias a nuestra mayor participación en el mercado, nos trasladamos a unas instalaciones más amplias en la Av. de las Américas para atender la creciente demanda.", image: "/images/patio-naves.webp" },
    { year: "2008", title: "Incursión industrial", desc: "Ingresamos con fuerza al exigente sector industrial, respaldando nuestros procesos con la capacitación técnica y constante de todo el personal.", image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg" },
    { year: "2013", title: "Sede matriz propia", desc: "Inauguración de nuestro edificio principal en la Av. Francisco de Orellana (Guayaquil), un hito que consolidó nuestra presencia comercial a nivel nacional.", image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372958/helisa/projects/edificio-helisa.jpg" },
    { year: "2017", title: "Especialización estratégica", desc: "Transición del modelo de negocio para enfocarnos al 100% en el desarrollo e instalación de tecnologías avanzadas en purificación de agua y aire.", image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg" },
    { year: "2021", title: "Estándares de calidad", desc: "Iniciamos el riguroso proceso de implementación de la normativa internacional ISO 9001:2015, reafirmando nuestro compromiso con la excelencia.", image: "/images/nave-tarimas.jpg" },
    { year: "2024", title: "Expansión operativa", desc: "Adquisición de nuestra Planta de Producción en el Parque Industrial Inmaconsa, fortaleciendo nuestra capacidad logística y de fabricación.", image: "/images/patio-naves.webp" },
    { year: "Actualidad", title: "Pensando en su bienestar", desc: "Continuamos innovando y mejorando nuestros procesos cada día, brindando la mejor atención y tecnología enfocados siempre en la salud y satisfacción de nuestros clientes.", image: "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg" },
  ],
};

export async function getAbout(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create(DEFAULT_ABOUT);
    }
    res.json(about);
  } catch (error) {
    next(error);
  }
}

export async function updateAbout(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { storyImage, storyParagraphs, values, timeline } = req.body;

    const update: Record<string, any> = {};
    if (storyImage !== undefined) update.storyImage = storyImage;
    if (storyParagraphs !== undefined) update.storyParagraphs = storyParagraphs;
    if (values !== undefined) update.values = values;
    if (timeline !== undefined) update.timeline = timeline;

    let about = await About.findOne();
    if (!about) {
      about = await About.create({ ...DEFAULT_ABOUT, ...update });
    } else {
      about = await About.findByIdAndUpdate(about._id, update, { new: true });
    }

    res.json(about);
  } catch (error) {
    next(error);
  }
}
