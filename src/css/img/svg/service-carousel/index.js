import trator from "./trator.svg";
import cerca from "./cerca.svg";
import globo from "./globo.svg";
import documento from "./documento.svg";
import leaf from "./leaf.svg";
import drop from "./drop.svg";
import tree from "./tree.svg";
import seed from "./seed.svg";
import flashlight from "./flashlight.svg";

const servicesArray = [
  {
    name: "Trator",
    icon: trator,
    content: [
      {
        title: "Supressão de Vegetação Nativa e Plantada",
      },

      {
        title: "PAE - Plano de Aproveitamento Econômico",
      },
    ],
  },
  {
    name: "Seed",
    icon: seed,
    content: [
      {
        title: "Defesa Ambiental",
      },
      {
        title: "Assessoria Ambiental",
      },
      {
        title: "Licenciamento Ambiental",
      },
    ],
  },
  {
    name: "Globo",
    icon: globo,
    content: [
      {
        title: "Georreferenciamento Rural e Urbano - (GEO)",
      },
    ],
  },
  {
    name: "Documento",
    icon: documento,
    content: [
      {
        title: "CAR - Cadastro Ambiental Rural",
      },
      {
        title: "CCIR - Certificado de Cadastro de Imóvel Rural",
      },
      {
        title: "Usucapião Judicial e Extra Judicial",
      },
    ],
  },
  {
    name: "Drop",
    icon: drop,
    content: [
      {
        title: "Outorga de Água IGAM",
      },
      {
        title: "Requerimento de Lavra",
      },
    ],
  },
  {
    name: "Tree",
    icon: tree,
    content: [
      {
        title: "PTRF - Projeto Técnico de Recuperação Flora",
      },
      {
        title:
          "PRADA - Projeto Técnico de Recuperação de Área Degradada ou Alterada",
      },
    ],
  },
  {
    name: "Cerca",
    icon: cerca,
    content: [
      {
        title: "Regularização de Imóveis Urbano e Rural",
      },

      {
        title: "Regularização Ambiental e Florestal",
      },
    ],
  },
  {
    name: "Flashlight",
    icon: flashlight,
    content: [
      {
        title: "Estudo de Cavidade/ Espeleológico",
      },

      {
        title: "Pesquisa Mineral",
      },
    ],
  },
];

export { trator, cerca, globo, documento, leaf, drop, servicesArray };
