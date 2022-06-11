import { api } from './api'

class PlaceService {
  getPlace = (params) => {
    return api.get('/place?pageSize=10&page=1', params)
  }

  getTypePlace = (params) => {
    return api.get('/place/type-place', params)
  }
  createPlace = (params) => {
    const body = {
      name: 'Sân đá bóng bách khoa',
      address: 'Lãng Yên hai bà trung',
      timeOpen: '8h30',
      description: '8h30',
      timeClose: '8h30',
      timeDistance: 300,
      priceMin: '1000',
      imageBanner: [],
      imageDetails: [],
      timeGold: [
        {
          timeStart: '6h30',
          price: '10000',
        },
      ],
      services: [
        {
          timeStart: '6h30',
          price: '10000',
          name: 'Cho thuê giày tập',
        },
      ],
      limitUsers: 1000,
      typePlace: {
        id: 'fb4b20fa-a439-45ba-95e6-a4e7e6467b86',
        name: 'Sân bóng ',
        isActive: true,
        isDeleted: false,
      },
    }
    return api.post('owner/place', params)
  }
  editPlace = (params) => {
    return api.post('auth/register', params)
  }
}

const placeService = new PlaceService()

export default placeService
