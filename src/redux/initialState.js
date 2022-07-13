export const initialState = {
  categories: [
    {
      id: 'all',
      name: 'Show all',
    },
    {
      id: 'hats',
      name: 'Hats',
    },
    {
      id: 'mugs',
      name: 'Mugs',
    },
    {
      id: 'tshirts',
      name: 'T-shirts',
    },
  ],
  products: [
    {
      id: '1',
      name: 'Hat Aqua',
      desc: 'Aliquam massa arcu, porta eu justo eget, venenatis congue leo. Sed at risus et ipsum euismod volutpat non in velit.',
      category: 'hats',
      price: 19,
      image: 'src=../../../images/Products/hats/hatAqua.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '2',
      name: 'Hat Blue',
      desc: 'Praesent faucibus nisi eget convallis finibus. Donec lobortis risus enim, sit amet faucibus quam elementum nec. Donec porttitor et nulla.',
      category: 'hats',
      price: 29,
      image: 'src=../../../images/Products/hats/hatBlue.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '3',
      name: 'Hat Green',
      desc: 'Integer id ornare mi. Vestibulum imperdiet ac tortor ac hendrerit. Sed ullamcorper purus a turpis lacinia vestibulum. Cras eleifend malesuada.',
      category: 'hats',
      price: 19,
      image: 'src=../../../images/Products/hats/hatGreen.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '4',
      name: 'Hat Grey',
      desc: 'Pellentesque non fermentum tellus, vulputate porttitor est. Integer mattis vitae sapien a pretium. Quisque elementum et ipsum non consectetur. Aenean.',
      category: 'hats',
      price: 39,
      image: 'src=../../../images/Products/hats/hatGrey.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '5',
      name: 'Hat Orange',
      desc: 'Curabitur eu massa quis ex feugiat egestas. Fusce non ultrices sem. In sed faucibus arcu. Aliquam semper, nisl vel rutrum.',
      category: 'hats',
      price: 19,
      image: 'src=../../../images/Products/hats/hatOrange.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '6',
      name: 'Hat Purple',
      desc: 'Fusce in dui a risus accumsan volutpat. Quisque convallis ipsum sit amet nulla gravida, in consectetur ligula sagittis. Maecenas imperdiet.',
      category: 'hats',
      price: 29,
      image: 'src=../../../images/Products/hats/hatPurple.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '7',
      name: 'Hat Red',
      desc: 'Sed pretium interdum magna, ut molestie massa varius non. Quisque vitae orci quis mauris facilisis luctus. Nam sed faucibus quam.',
      category: 'hats',
      price: 49,
      image: 'src=../../../images/Products/hats/hatRed.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '8',
      name: 'Hat White',
      desc: 'Mauris ac ante egestas, scelerisque nunc a, pellentesque velit. Nunc imperdiet nisl sem, vel pretium mauris tempor vel. Nunc pretium.',
      category: 'hats',
      price: 39,
      image: 'src=../../../images/Products/hats/hatWhite.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '9',
      name: 'Hat Yellow',
      desc: 'Praesent tincidunt ipsum ultricies tellus tincidunt, sit amet laoreet libero laoreet. Sed leo dolor, hendrerit quis imperdiet ut, accumsan nec.',
      category: 'hats',
      price: 39,
      image: 'src=../../../images/Products/hats/hatYellow.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's/m',
        },
        {
          id: 'l',
          size: 'l/xl',
        },
      ],
    },
    {
      id: '10',
      name: 'Mug Aqua',
      desc: 'Donec eu vestibulum nisl, pellentesque efficitur sem. Phasellus et urna id velit fringilla accumsan. Praesent tempus neque tellus, et semper.',
      category: 'mugs',
      price: 19,
      image: 'src=../../../images/Products/mugs/mugAqua.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '11',
      name: 'Mug Blue',
      desc: 'Proin porta lobortis molestie. Mauris felis tellus, fringilla a ligula sed, scelerisque maximus ante. Fusce finibus arcu mattis congue molestie.',
      category: 'mugs',
      price: 29,
      image: 'src=../../../images/Products/mugs/mugBlue.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '12',
      name: 'Mug Green',
      desc: 'Vivamus nec vulputate metus. Maecenas rhoncus mauris non odio consequat bibendum. Duis blandit sagittis enim, at sodales eros pulvinar id.',
      category: 'mugs',
      price: 19,
      image: 'src=../../../images/Products/mugs/mugGreen.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '13',
      name: 'Mug Grey',
      desc: 'Mauris et ex eget quam vulputate tempus eu sit amet tellus. Maecenas sagittis fringilla enim, eget sagittis arcu sodales vitae.',
      category: 'mugs',
      price: 29,
      image: 'src=../../../images/Products/mugs/mugGrey.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '14',
      name: 'Mug Orange',
      desc: 'Praesent tincidunt dui ut libero placerat auctor. Proin quis vulputate mi. Quisque laoreet diam eu augue rutrum mattis. Curabitur gravida.',
      category: 'mugs',
      price: 19,
      image: 'src=../../../images/Products/mugs/mugOrange.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '15',
      name: 'Mug Purple',
      desc: 'In hac habitasse platea dictumst. Fusce in lectus eleifend, efficitur elit sed, congue nibh. Nunc a nunc est. Aenean dictum.',
      category: 'mugs',
      price: 29,
      image: 'src=../../../images/Products/mugs/mugPurple.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '16',
      name: 'Mug Red',
      desc: 'Sed sed nisi vel tellus maximus ultricies eget lacinia metus. Donec a ipsum quis orci vulputate bibendum. Quisque in mauris.',
      category: 'mugs',
      price: 19,
      image: 'src=../../../images/Products/mugs/mugRed.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '17',
      name: 'Mug White',
      desc: 'Aenean consequat dui eu dui aliquet malesuada. Ut porta nisl a risus iaculis, vitae congue dolor bibendum. In hac habitasse.',
      category: 'mugs',
      price: 29,
      image: 'src=../../../images/Products/mugs/mugWhite.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '18',
      name: 'Mug Yellow',
      desc: 'Donec nec augue molestie, posuere lacus sit amet, vulputate tortor. Nunc eleifend pellentesque euismod. Nam condimentum elit at mauris sagittis.',
      category: 'mugs',
      price: 19,
      image: 'src=../../../images/Products/mugs/mugYellow.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: '230',
          size: '230ml',
        },
        {
          id: '330',
          size: '330ml',
        },
      ],
    },
    {
      id: '19',
      name: 'T-shirt Aqua',
      desc: 'In ultricies condimentum vehicula. Aliquam aliquet placerat mauris vitae lacinia. Nulla facilisi. Nunc et velit sit amet ipsum maximus posuere.',
      category: 'tshirts',
      price: 59,
      image: 'src=../../../images/Products/tshirts/tshirtAqua.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '20',
      name: 'T-shirt Blue',
      desc: 'Cras sit amet gravida velit. Integer vel metus fringilla metus dignissim euismod. Etiam sodales, sem id accumsan tincidunt, est lacus.',
      category: 'tshirts',
      price: 49,
      image: 'src=../../../images/Products/tshirts/tshirtBlue.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '21',
      name: 'T-shirt Green',
      desc: 'Integer porta lobortis ex. Fusce posuere neque eleifend nulla imperdiet sollicitudin. Phasellus leo ex, molestie id consectetur vel, sollicitudin vel.',
      category: 'tshirts',
      price: 69,
      image: 'src=../../../images/Products/tshirts/tshirtGreen.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '22',
      name: 'T-shirt Grey',
      desc: 'Donec ut ex vel augue tempus porta ac ultrices erat. Praesent venenatis tempus massa nec bibendum. Suspendisse potenti. In hac.',
      category: 'tshirts',
      price: 59,
      image: 'src=../../../images/Products/tshirts/tshirtGrey.png',
      sale: true,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '23',
      name: 'T-shirt Orange',
      desc: 'Phasellus vehicula eros non risus lacinia, vel blandit tortor semper. Vestibulum lorem quam, gravida vel libero sit amet, blandit tempus.',
      category: 'tshirts',
      price: 69,
      image: 'src=../../../images/Products/tshirts/tshirtOrange.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '24',
      name: 'T-shirt Pink',
      desc: 'Mauris varius nec eros quis dignissim. Etiam ut consequat elit, eget volutpat quam. Nullam turpis est, gravida ac maximus quis.',
      category: 'tshirts',
      price: 49,
      image: 'src=../../../images/Products/tshirts/tshirtPink.png',
      sale: false,
      featured: true,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '25',
      name: 'T-shirt Purple',
      desc: 'Pellentesque et faucibus turpis. Ut vel sapien et lectus facilisis auctor nec vitae sem. Donec venenatis tempor tortor, ut egestas.',
      category: 'tshirts',
      price: 79,
      image: 'src=../../../images/Products/tshirts/tshirtPurple.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '26',
      name: 'T-shirt Red',
      desc: 'Nullam pretium dui et gravida eleifend. Sed ac arcu ut dui pellentesque hendrerit quis eget quam. Nulla lobortis placerat vulputate.',
      category: 'tshirts',
      price: 59,
      image: 'src=../../../images/Products/tshirts/tshirtRed.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
    {
      id: '27',
      name: 'T-shirt Yellow',
      desc: 'Etiam ac facilisis felis. Etiam ullamcorper auctor elit, quis mattis nulla finibus in. Pellentesque rhoncus venenatis consectetur. Phasellus diam quam.',
      category: 'tshirts',
      price: 49,
      image: 'src=../../../images/Products/tshirts/tshirtYellow.png',
      sale: false,
      featured: false,
      sizes: [
        {
          id: 's',
          size: 's',
        },
        {
          id: 'm',
          size: 'm',
        },
        {
          id: 'l',
          size: 'l',
        },
        {
          id: 'xl',
          size: 'xl',
        },
      ],
    },
  ],
  employees: [
    {
      id: '28',
      department: 'Finace Manager',
      name: 'John Doe',
      image: 'src=../../images/Employees/employee1.jpg',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    {
      id: '29',
      department: 'IT Service',
      name: 'Amanda Smith',
      image: 'src=../../images/Employees/employee2.jpg',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    {
      id: '30',
      department: 'Help Department',
      name: 'Elena Evans',
      image: 'src=../../images/Employees/employee3.jpg',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    {
      id: '31',
      department: 'Shipments',
      name: 'Bob Taylor',
      image: 'src=../../images/Employees/employee4.jpg',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    {
      id: '32',
      department: 'Owner',
      name: 'Tom Johnson',
      image: 'src=../../images/Employees/employee5.jpg',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  ],
  banners: [
    {
      id: '33',
      image: 'src=../../images/Banner/baner1.png',
      title: 'Personalized T-shirts',
      text: 'Proin sollicitudin rhoncus hendrerit. Suspendisse vitae risus nulla. Fusce eu risus sem. Nunc id nisi volutpat, interdum purus.',
    },
    {
      id: '34',
      image: 'src=../../images/Banner/baner2.png',
      title: 'Personalized mugs',
      text: 'Nulla lobortis urna diam, eu finibus dui cursus eu. Donec ut faucibus turpis. Nunc ut urna diam. Nam.',
    },
    {
      id: '35',
      image: 'src=../../images/Banner/baner3.png',
      title: 'Personalized hats',
      text: 'Aenean ut dui sit amet turpis lobortis lobortis ac vitae metus. Ut iaculis dui cursus convallis sodales. Nulla.',
    },
  ],
  opinions: [
    {
      id: '36',
      image: 'src=../../images/Opinions/opinion1.jpg',
      name: 'Amanda Doe',
      text: 'Aenean vehicula sollicitudin risus nec tincidunt. Etiam eu blandit ipsum. Proin et varius libero, eu tincidunt augue. Etiam aliquet posuere facilisis. Quisque eget neque a nunc cursus tincidunt ut porta.',
    },
    {
      id: '37',
      image: 'src=../../images/Opinions/opinion2.jpg',
      name: 'John Doe',
      text: 'Donec in auctor lorem. Integer eget nulla nec quam scelerisque venenatis sit amet ac sem. Nullam nec orci eu diam faucibus aliquet nec eget neque. Nunc et imperdiet est. Morbi.',
    },
    {
      id: '38',
      image: 'src=../../images/Opinions/opinion3.jpg',
      name: 'Bob Doe',
      text: 'Proin sodales scelerisque mi euismod accumsan. Donec sed vestibulum urna, in sodales felis. Aenean dignissim, lectus eget ullamcorper euismod, felis diam aliquam arcu, ac pretium magna nisl vel risus. Nulla.',
    },
  ],
  brands: [
    {
      id: '39',
      image: 'src=../../images/BrandsBar/brand1.png',
    },
    {
      id: '40',
      image: 'src=../../images/BrandsBar/brand2.png',
    },
    {
      id: '41',
      image: 'src=../../images/BrandsBar/brand3.png',
    },
    {
      id: '42',
      image: 'src=../../images/BrandsBar/brand4.png',
    },
    {
      id: '43',
      image: 'src=../../images/BrandsBar/brand5.png',
    },
    {
      id: '44',
      image: 'src=../../images/BrandsBar/brand6.png',
    },
  ],
  cart: [],
};
