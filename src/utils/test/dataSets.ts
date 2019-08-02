export const cars = [
  {
    stockNumber: 867,
    manufacturerName: 'Audi',
    modelName: 'TT',
    color: 'red',
    mileage: { number: 1468, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 482,
    manufacturerName: 'Audi',
    modelName: 'RS 4',
    color: 'red',
    mileage: { number: 13407, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 640,
    manufacturerName: 'Audi',
    modelName: 'S7',
    color: 'red',
    mileage: { number: 17872, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 489,
    manufacturerName: 'Audi',
    modelName: 'RS 3',
    color: 'red',
    mileage: { number: 23755, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 512,
    manufacturerName: 'Audi',
    modelName: 'RS 7',
    color: 'red',
    mileage: { number: 29344, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 486,
    manufacturerName: 'Audi',
    modelName: 'TT Roadster',
    color: 'red',
    mileage: { number: 39089, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 244,
    manufacturerName: 'Audi',
    modelName: 'Cabriolet',
    color: 'red',
    mileage: { number: 50286, unit: 'km' },
    fuelType: 'Diesel',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 587,
    manufacturerName: 'Audi',
    modelName: 'S7',
    color: 'red',
    mileage: { number: 54642, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 783,
    manufacturerName: 'Audi',
    modelName: 'SQ7',
    color: 'red',
    mileage: { number: 56034, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  },
  {
    stockNumber: 294,
    manufacturerName: 'Audi',
    modelName: 'RS 5',
    color: 'red',
    mileage: { number: 57463, unit: 'km' },
    fuelType: 'Petrol',
    pictureUrl: '/images/car.svg'
  }
];

export const carsResponse = {
  data: {
    cars,
    totalPageCount: 2,
    totalCarsCount: 14
  }
};

export const singleCarResponse = {
  data: {
    car: {
      stockNumber: '867',
      manufacturerName: 'Audi',
      modelName: 'TT',
      color: 'red',
      mileage: { number: 1468, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: '/images/car.svg'
    }
  }
};

export const colors = {
  colors: ['red', 'black']
};
export const manufacturers = {
  manufacturers: [
    {
      name: 'Audi',
      models: [
        { uuid: 'ulbKJZgWlu4QJyplzffmM', name: '100' },
        { uuid: 'kvyyUvd44bZlEXW5ps8H6', name: '200' },
        { uuid: '4L06-7ZWdXJgB68gP01zB', name: '50' },
        { uuid: 'lY6GxZM1y69W-ZKtwYWeG', name: '80/90' }
      ],
      uuid: 'qcseNRuGXTNp2W6gZ0rzY'
    },
    {
      name: 'BMW',
      models: [
        { uuid: 'D4Ox73vaNJRil6Lwxei0-', name: '1er' },
        { uuid: 'exJ6poLYG2EQOxNdmZMUC', name: '2er' },
        { uuid: 'cpSBneHYD1BNXel1iLIW3', name: '3er' },
        { uuid: 'PU9cc7ntCLhagDquRPldR', name: '4er' },
        { uuid: 's5Op8h6Hutf_GrUjRZRD-', name: '5er' }
      ],
      uuid: 'Swf6bdZqQEKTpa3uuSZ5T'
    },
    {
      name: 'Chrysler',
      models: [
        { uuid: '1gdJk-MwuQaKGWaPnqtoa', name: '300 C' },
        { uuid: 'RBBjK7PySc5JcpbpheyNa', name: '300 M' },
        { uuid: 'R2oZcas0A_TYUkalZpjBO', name: 'Crossfire' },
        { uuid: 'Gs2P2Lk9IejoMOBpfogVj', name: 'Daytona Shelby' }
      ],
      uuid: 'g0u-NWytRGWN3OxIRKhv2'
    }
  ]
};
