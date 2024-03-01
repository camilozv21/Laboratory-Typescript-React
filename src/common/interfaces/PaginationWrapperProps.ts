export interface PaginationWrapperProps {
  activePage: number;
  isPrevNull: boolean;
  handleSelect: (pageNumber: number) => void;
  handlePrevPage: () => void;
}