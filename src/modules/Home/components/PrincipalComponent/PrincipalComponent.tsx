import { CarouselComponent } from "../CarouselComponent/CarouselComponent";
import './PrincipalComponent.scss';

export const PrincipalComponent = () => {
  return (
    <>
      <div className="container my-2 pb-5">
        <h1 className="principal-title my-4">Rick & Morty adventures</h1>
        <CarouselComponent />
        <hr />
        <h2 className="pt-2">Scrapbooking album</h2>
      </div>
    </>
  )
}
