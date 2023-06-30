import trator from './trator.svg';
import cerca from './cerca.svg';
import globo from './globo.svg';
import documento from './documento.svg';
import leaf from './leaf.svg';
import drop from './drop.svg';
import tree from './tree.svg';

const servicesArray = [
  {
    name: 'Trator',
    icon: trator,
    content: [{
      title: 'Supressão de Vegetação Nativa e Plantada',
      text: `A supressão de vegetação refere-se à remoção ou corte de árvores ou vegetação de uma área.
      A supressão de vegetação está sujeita a regulamentações e procedimentos estabelecidos pelos
      órgãos ambientais competentes. É importante ressaltar que a supressão de vegetação pode ser
      autorizada em determinadas circunstâncias, desde que cumpridos os requisitos legais e
      ambientais aplicáveis. O inventário florestal é um levantamento detalhado das características e
      informações das florestas, incluindo dados sobre a composição da vegetação, estrutura,
      diversidade, volume de madeira, entre outros parâmetros. Ele pode ser realizado com o objetivo
      de monitorar o estado da floresta, planejar a exploração sustentável de recursos florestais,
      subsidiar a elaboração de planos de manejo ou avaliar os impactos de supressão de vegetação.
      `,
    },
    {
      title: 'Pesquisa Mineral',
      text: `A Agência Nacional de Mineração (ANM) é o órgão responsável por regular e fiscalizar as atividades
      de pesquisa e exploração mineral no Brasil. A pesquisa mineral é uma etapa inicial do processo de desenvolvimento
      de uma mina, na qual são realizados estudos para identificar e avaliar o potencial mineral de uma determinada área.`,
    },
    {
      title: 'Requerimento de Lavra',
      text: `O requerimento de lavra é um processo necessário para obter a concessão de uma autorização
      de lavra junto ao órgão competente. Esse processo está relacionado à atividade de mineração e
      envolve a solicitação formal para explorar recursos minerais em uma determinada área.`,
    },
    ],
  },
  {
    name: 'Cerca',
    icon: cerca,
    content: [
      {
        title: 'Assessoria Ambiental',
        text: `A assessoria ambiental é um serviço prestado por profissionais especializados na área ambiental,
        que oferecem suporte e orientação para questões relacionadas à legislação ambiental, gestão ambiental,
        licenciamento, monitoramento, projetos sustentáveis e outras atividades voltadas para a preservação e uso responsável dos recursos naturais.`,
      },
      {
        title: 'Defesa Ambiental',
        text: `A defesa de multas ambientais envolve o processo de contestar e buscar a anulação ou redução de penalidades impostas por infrações às normas
        e regulamentos ambientais. A defesa das multas ambientais geralmente requer conhecimento especializado na área ambiental e compreensão dos aspectos
        legais envolvidos.`,
      },
    ],
  },
  {
    name: 'Globo',
    icon: globo,
    content: [
      {
        title: 'Georreferenciamento Rural e Urbano',
        text: `O Georreferenciamento (GEO) é o processo de associar informações geográficas a áreas na superfície terrestre. Ele envolve a utilização de coordenadas
        geográficas, como latitude e longitude, para identificar a localização exata de um determinado objeto ou área geográfica. O GEO rural é um processo utilizado
        para identificar e delimitar as propriedades rurais de acordo com coordenadas geográficas precisas. Esse procedimento é especialmente importante para a regularização
        fundiária e legalização de imóveis rurais. No contexto brasileiro, a certificação do georreferenciamento rural é realizada pelo Instituto Nacional de Colonização e
        Reforma Agrária (Incra). O Incra é o órgão responsável pela execução da política de reforma agrária e pela regularização das terras rurais no país.`,
      },
    ],
  },
  {
    name: 'Documento',
    icon: documento,
    content: [
      {
        title: 'Regularização de Imóveis Urbano e Rural',
        text: `A regularização de imóveis no registro de imóveis é um processo necessário para garantir a legalidade e a segurança jurídica da propriedade. O registro de
        imóveis é o órgão responsável por manter as informações sobre a propriedade dos imóveis, bem como por registrar e documentar os atos relativos a eles.`,
      },
      {
        title: 'CCIR',
        text: `O CCIR (Certificado de Cadastro de Imóvel Rural) é um documento emitido pelo Instituto Nacional de Colonização e Reforma Agrária (INCRA) no Brasil.
        Ele tem como objetivo comprovar a existência do imóvel rural e registrar suas informações cadastrais.`,
      },
      {
        title: 'Regularização Ambiental e Florestal',
        text: `A regularização ambiental e florestal é um conjunto de medidas e procedimentos que visam adequar propriedades rurais e empreendimento às legislações
        ambientais e florestais vigentes. Essas regularizações são necessárias para garantir a conservação dos recursos naturais, a proteção do meio ambiente e o uso sustentável dos recursos naturais.
        No contexto brasileiro, a regularização ambiental e florestal está diretamente relacionada à implementação do Código Florestal (Lei nº 12.651/2012) e do Sistema Nacional de Informação sobre o Meio Ambiente
        (SINIMA), que abrange o Cadastro Ambiental Rural (CAR) e o Programa de Regularização Ambiental (PRA).`,
      }
    ],
  },
  {
    name: 'Leaf',
    icon: leaf,
    content: [
      {
        title: 'Licenciamento Ambiental',
        text: `A Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável (SEMAD) é o órgão responsável pelo Licenciamento Ambiental em Minas Gerais, no Brasil.
        O licenciamento ambiental é um procedimento obrigatório que visa avaliar e controlar os impactos ambientais de atividades ou empreendimentos que possam causar danos ao meio ambiente. O processo de
        licenciamento ambiental realizado pela SEMAD segue as diretrizes estabelecidas pela legislação ambiental brasileira, em especial a Resolução CONAMA (Conselho Nacional do Meio Ambiente)
        nº 237/1997. Essa resolução estabelece as etapas e os documentos necessários para a obtenção da licença ambiental.`,
      },
      {
        title: 'CAR',
        text: `O Cadastro Ambiental Rural (CAR) é um registro eletrônico obrigatório para todas as
        propriedades rurais no Brasil, estabelecido pela Lei nº 12.651/2012, conhecida como o Novo
        Código Florestal. O CAR tem como objetivo principal promover a regularização ambiental das
        propriedades rurais e é uma importante ferramenta para a gestão e controle ambiental. O CAR
        consiste no cadastro das informações sobre a propriedade rural, como sua localização, limites
        georreferenciados, áreas de vegetação nativa, áreas consolidadas, áreas de preservação
        permanente, áreas de reserva legal, entre outros aspectos ambientais relevantes.`,
      },
    ],
  },
  {
    name: 'Drop',
    icon: drop,
    content: [
      {
        title: 'Outorga de Água IGAM',
        text: `A outorga de água é um procedimento realizado pelo Instituto Mineiro de Gestão das Águas
        (IGAM) em Minas Gerais, Brasil, para conceder o direito de uso dos recursos hídricos a pessoas
        físicas ou jurídicas. O IGAM é o órgão responsável pela gestão e regulação dos recursos hídricos
        no estado. A outorga de água é necessária para o uso dos recursos hídricos, como captação de
        água para abastecimento público, irrigação, indústria, geração de energia hidrelétrica, entre
        outros fins. Ela tem como objetivo garantir a disponibilidade e a sustentabilidade dos recursos
        hídricos, evitando conflitos e promovendo o uso racional e equilibrado da água.`,
      },
    ]
  },
  {
    name: 'Tree',
    icon: tree,
    content: [
      {
        title: 'Projetos Sustentáveis',
        text: ``,
      },
    ],
  }
]

export {
  trator,
  cerca,
  globo,
  documento,
  leaf,
  drop,
  servicesArray,
}
