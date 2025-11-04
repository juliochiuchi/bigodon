export const appointmentCardList = [
  {
    serviceName: "Aparar a Barba",
    serviceDate: "21/12/2025",
    serviceDateText: "Sexta, 21 de Dezembro",
    serviceHour: "09:00",
    cover: require('../../assets/services/fazendoBarba.jpg')
  },
]

export const OFFER_LIST = [
  {
    title: "Combo corte + barba",
    Economy: 10.00,
    price: 49.90,
    description: "Economize no combo clássico",
    validate: "Válido por 30 dias",
    cover: require('../../assets/services/offer1.jpeg')
  },
  {
    title: "Cabelo + barboterapia + limpeza",
    Economy: 30.00,
    price: 60.00,
    description: "Economize no combo premium",
    validate: "Válido de segunda a sexta, das 11h às 15h",
    cover: require('../../assets/services/offer2.jpeg')
  },
]

export const SERVICES = [
  {
    title: "Cabelo",
    data: [{
      id: 1,
      serviceName: "Cortar o Cabelo",
      serviceDescription: "Cortar o cabelo com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber1.jpeg'),
      serviceCategory: "Cabelo",
    },
    {
      id: 2,
      serviceName: "Limpar o Cabelo",
      serviceDescription: "Limpar o cabelo com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber2.jpeg'),
      serviceCategory: "Cabelo",
    },
    {
      id: 3,
      serviceName: "Corte com Limpeza de Cabelo",
      serviceDescription: "Cortar e limpar o cabelo com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber3.jpeg'),
      serviceCategory: "Cabelo",
    },]
  },
  {
    title: "Barba",
    data: [{
      id: 1,
      serviceName: "Aparar a Barba",
      serviceDescription: "Aparar a barba com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber4.jpeg'),
      serviceCategory: "Barba",
    },
    {
      id: 2,
      serviceName: "Limpeza da Barba",
      serviceDescription: "Limpeza da barba com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber5.jpeg'),
      serviceCategory: "Barba",
    },
    {
      id: 3,
      serviceName: "Aparar e Limpar a Barba",
      serviceDescription: "Aparar e limpeza da barba com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber6.jpeg'),
      serviceCategory: "Barba",
    },]
  },
  {
    title: "Limpeza",
    data: [{
      id: 1,
      serviceName: "Limpeza de Pele",
      serviceDescription: "Limpeza de pele com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber7.jpeg'),
      serviceCategory: "Limpeza",
    },]
  },
  {
    title: "HardRock",
    data: [{
      id: 1,
      serviceName: "HardRock",
      serviceDescription: "Hard rock com as melhores técnicas",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber8.jpeg'),
      serviceCategory: "HardRock",
    },]
  },
  {
    title: "Ofertas",
    data: [{
      id: 1,
      serviceName: "Ofertas de servicos",
      serviceDescription: "Oferecemos os melhores serviços com preços especiais",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber9.jpeg'),
      serviceCategory: "Ofertas",
    },]
  },
  {
    title: "Combos",
    data: [{
      id: 1,
      serviceName: "Combos de servicos",
      serviceDescription: "Oferecemos os melhores combos com preços especiais",
      servicePrice: 49.90,
      serviceImage: require('../../assets/services/barber10.jpeg'),
      serviceCategory: "Combos",
    },]
  },
]

export const SERVICES_LIST = SERVICES.map((item) => item.data).flat()

export const CATEGORIES = SERVICES.map((item) => item.title)

export type ServiceProps = (typeof SERVICES_LIST)[0]
