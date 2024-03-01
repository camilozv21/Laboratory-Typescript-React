import { useEffect, useState } from "react"
import { getCharactersByPage } from "../services"
import { Result } from "../interfaces/rickAndMortyCharacterResponse"
import { PaginationComponent } from "../../../common/components/PaginationComponent/PaginationComponent"
import "./CardCharacter.scss"

export const CardCharacter = () => {

  const [characters, setCharacters] = useState<Result[]>([])
  const [page, setPage] = useState<number>(1)
  const [isPrevNull, setIsPrevNull] = useState<boolean>(false)
  const [activePage, setActivePage] = useState(1);
  
  useEffect(() => {
    const fetchCharacters = async ( page: number ) => {
      const { results, info } = await getCharactersByPage( page )
      setCharacters(results)
      info.prev === null ? setIsPrevNull(true) : setIsPrevNull(false)
    }
    fetchCharacters( page )
  }, [page])

  const handlePrevPage = () => {
    isPrevNull ? setPage( page ) : setPage( page - 1 )
  }
  
  const handleSelect = (pageNumber: number) => {
    setActivePage(pageNumber);
    setPage(pageNumber);
  };

  return (
    <>
    <section className="container my-4">
        {characters.map( (character) => (
          <div key={character.id} className="card border border-dark border-3 custom-card" style={{width: "18rem"}}>
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">{character.name}</h5>
              {character.status === "Alive" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-pulse-fill statusPosition text-success" viewBox="0 0 16 16">
                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z"/>
                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z"/>
              </svg>
              )}
              {character.status === "Dead" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-dizzy-fill statusPosition text-danger" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
                </svg>
              )}
              {character.status === "unknown" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-question-octagon-fill statusPosition text-info" viewBox="0 0 16 16">
                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"/>
                </svg>
              )}
              <p className="card-text">Species: {character.species}</p>
            </div>
          </div>
        ) )}
      </section>

      <div className="fab">
        <div className="d-flex justify-content-center align-items-center mx-4">
          <PaginationComponent 
            activePage={activePage}
            isPrevNull={isPrevNull}
            handleSelect={handleSelect}
            handlePrevPage={handlePrevPage}
          />
        </div>
      </div>


  </>
  )
}
