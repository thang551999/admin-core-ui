import { api } from './api'

class PlaceService {
  getPlace = (params) => {
    return api.get('/place?pageSize=10&page=1', params)
  }

  createPlace = (params) => {
    return api.post('auth/register', params)
  }
  editPlace = (params) => {
    return api.post('auth/register', params)
  }
}

const placeService = new PlaceService()

export default placeService
