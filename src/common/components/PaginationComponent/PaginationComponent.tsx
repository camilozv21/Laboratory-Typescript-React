import Pagination from 'react-bootstrap/Pagination';
import { PaginationWrapperProps } from '../../interfaces/PaginationWrapperProps';
import './PaginationComponent.scss';

export const PaginationComponent: React.FC<PaginationWrapperProps> = ({ activePage, isPrevNull, handleSelect, handlePrevPage }) => {
  return (
    <Pagination className="custom-card">
      <Pagination.Prev onClick={handlePrevPage} disabled={isPrevNull} />
      {activePage > 1 && <Pagination.Item onClick={() => handleSelect(activePage - 1)}>{activePage - 1}</Pagination.Item>}
      <Pagination.Item active>{activePage}</Pagination.Item>
      <Pagination.Item onClick={() => handleSelect(activePage + 1)}>{activePage + 1}</Pagination.Item>
      <Pagination.Next onClick={() => handleSelect(activePage + 1)} />
    </Pagination>
  )
}
