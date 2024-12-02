type LinkType = {
  name: string
}

export type TableType = {
  image: string
  head: string
  content: string
}

export type ServicesType = {
  image: string
  title: string
  description?: string
  descriptionList?: string[]
  table: TableType[]
  link?: LinkType
}

export type FeatureType = {
  icon: string
  image: string
  title: string
  description: string
}

const service1 = 'assets/img/services/service01.jpg'
const service2 = 'assets/img/services/service02.jpg'
const service3 = 'assets/img/services/service03.jpg'

const digital = 'assets/img/services/icons/digital.svg'
const chart = 'assets/img/services/icons/chart.svg'
const marketing = 'assets/img/services/icons/marketing.svg'
const cyber = 'assets/img/services/icons/cybersecurity.svg'

const insurance = 'assets/img/services/icons/insurance.svg'
const banking = 'assets/img/services/icons/banking.svg'
const payment = 'assets/img/services/icons/payments.svg'

const assets = 'assets/img/services/icons/asset.svg'
const operation = 'assets/img/services/icons/operations.svg'
const finance = 'assets/img/services/icons/finance.svg'
const audit = 'assets/img/services/icons/audit.svg'

const education = 'assets/img/services/industries/education.jpg'
const ecommerce = 'assets/img/services/industries/ecommerce.jpg'
const sports = 'assets/img/services/industries/sports.jpg'
const construction = 'assets/img/services/industries/construction.jpg'
const medicine = 'assets/img/services/industries/medicine.jpg'
const realEstate = 'assets/img/services/industries/real-estate.jpg'
const wellness = 'assets/img/services/industries/wellness.jpg'

export const servicesData: ServicesType[] = [
  {
    image: service1,
    title: 'Consulting Services',
    description: `Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla velit ornare cras. Facilisis tempus non erat ornare imperdiet. In ac ullamcorper proin urna, lacus, tortor, ullamcorper egestas mattis mauris.`,
    table: [
      {
        image: digital,
        head: 'Digital transformation',
        content: 'Aliquam quis odio senectus.',
      },
      {
        image: chart,
        head: 'Analytics services',
        content: 'Curabitur neque ut morbi sapien.',
      },
      {
        image: marketing,
        head: 'Marketing & sales',
        content: 'At faucibus molestie egestas sed.',
      },
      {
        image: cyber,
        head: 'Cybersecurity & strategy',
        content: 'Orci bibendum ullamcorper lorem.',
      },
    ],
  },
  {
    image: service2,
    title: 'Banking Expertise',
    descriptionList: [
      'Sagittis quam egestas sit sit convallis turpis sit augue interdum morbi.',
      'Sollicitudin cursus habitasse adipiscing est sed aenean sapien.',
      'At arcu arcu morbi scelerisque nibh. Quam velit fermentum porta facilisi massa.',
    ],
    table: [
      {
        image: insurance,
        head: 'Insurance',
        content: 'Nunc dui aliquam volutpat augue.',
      },
      {
        image: banking,
        head: 'Banking risk',
        content: 'Habitasse adipiscing aenean sapien.',
      },
      {
        image: payment,
        head: 'Payments',
        content: 'At faucibus molestie egestas sed.',
      },
    ],
  },
  {
    image: service3,
    title: 'Product Solutions',
    description:
      'Sem scelerisque laoreet commodo velit. Fringilla tempor egestas mattis mauris eu dui in. Viverra enim velit fringilla turpis suspendisse amet ipsum, nisi sed.',
    table: [
      {
        image: assets,
        head: 'Asset management',
        content: 'Mattis sodales tellus risus placerat in.',
      },
      {
        image: operation,
        head: 'Operations & technology',
        content: 'Viverra volutpat tellus orci enim.',
      },
      {
        image: finance,
        head: 'Corporate finance',
        content: 'Aliquet amet pharetra fermentum sem.',
      },
      {
        image: audit,
        head: 'Audit services',
        content: 'Venenatis congue iaculis malesuada.',
      },
    ],
  },
]

export const featureData: FeatureType[] = [
  {
    icon: 'graduationIcon',
    title: 'Education',
    description: `Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.`,
    image: education,
  },
  {
    icon: 'cartIcon',
    title: 'E-Commerce',
    description: `Curabitur auctor quam ut iaculis suscipit. Morbi ullamcorper tellus eu purus dictum convallis. Duis posuere dui sit amet pellentesque malesuada. Morbi ultrices tortor ut diam molestie, vel pharetra lectus lacinia. Lorem ipsum dolor sit amet.`,
    image: ecommerce,
  },
  {
    icon: 'runIcon',
    title: 'Sports',
    description: `Etiam vehicula commodo nunc, ut tincidunt risus aliquam sit amet. Vivamus ut velit ut odio malesuada tincidunt ut non eros. Curabitur vel quam varius, ullamcorper mi quis, ultrices eros. Nam eget mi ut diam elementum facilisis vehicula eget augue.`,
    image: sports,
  },
  {
    icon: 'paintIcon',
    title: 'Construction',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, nunc in iaculis vestibulum, nunc ex convallis est, ut viverra velit sapien ac erat. Vivamus aliquet mi tellus, vel viverra ex blandit sed. Sed blandit lobortis risus. Aliquam blandit cursus ex sed iaculis.`,
    image: construction,
  },
  {
    icon: 'medicalIcon',
    title: 'Medicine',
    description: `In vel nulla ac enim pellentesque tristique vel non dui. Integer vulputate ex leo, in accumsan purus consectetur quis. Cras scelerisque orci vel dapibus volutpat. In et consectetur enim. Maecenas lobortis viverra tortor, quis fermentum sem volutpat sit amet.`,
    image: medicine,
  },
  {
    icon: 'buildingIcon',
    title: 'Real Estate',
    description: `Donec consequat nibh at urna tincidunt tempor. Integer quis lobortis felis. Nulla id quam vestibulum, aliquam mauris vitae, auctor ex. Aliquam augue nulla, faucibus sed lacus ac, placerat elementum nisi. Curabitur enim nunc, dictum et accumsan.`,
    image: realEstate,
  },
  {
    icon: 'spaIcon',
    title: 'Wellness',
    description: `Morbi ullamcorper tellus eu purus dictum convallis. Duis posuere dui sit amet pellentesque malesuada. Morbi ultrices tortor ut diam molestie, vel pharetra lectus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius lectus lectus.`,
    image: wellness,
  },
]
