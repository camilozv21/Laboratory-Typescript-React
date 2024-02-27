import { CarouselComponent } from "../CarouselComponent/CarouselComponent";
import './PrincipalComponent.scss';

export const PrincipalComponent = () => {
  return (
    <>
      <div className="container my-2 pb-5">
        <h1 className="principal-title">Rick & Morty adventures</h1>
        <CarouselComponent />
      </div>
    </>
  )
}
