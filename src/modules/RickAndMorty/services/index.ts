import axios from '../api/axios.js'
import { RickAndMoryCharacterResponse } from '../interfaces/rickAndMortyCharacterResponse.js'

export const getCharactersByPage = async (page: number): Promise<RickAndMoryCharacterResponse> => {
  const { data }: { data: RickAndMoryCharacterResponse } = await axios.get(`/character?page=${ page }`)
  return data
}