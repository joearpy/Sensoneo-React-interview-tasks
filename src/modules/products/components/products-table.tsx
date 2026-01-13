import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/table";
import { useProducts } from "../../../hooks/use-products";
import { formatDate } from "../../../utils/date";
import type { ProductStatus } from "../../../types";
import { statusMap } from "../../../utils/status-map";
import { Skeleton } from "../../../components/skeleton";

export function ProductsTable() {
  const DEFAULT_STATUS: ProductStatus = "all";
  const [activeStatus, setActiveStatus] =
    useState<ProductStatus>(DEFAULT_STATUS);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: productsResponse,
    error: productsError,
    isLoading: isProductsLoading,
  } = useProducts({
    active: statusMap[activeStatus],
    limit: 10,
    page: currentPage,
  });

  if (productsError) return <div>Error loading products</div>;

  const pagination = productsResponse?.pagination;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (pagination?.totalPages || 1)) {
      setCurrentPage(page);
    }
  };

  const getPageItems = () => {
    if (!pagination) return [];

    const { currentPage, totalPages } = pagination;
    const pages: (number | "ellipsis")[] = [];

    if (currentPage > 2) pages.push(1);
    if (currentPage > 3) pages.push("ellipsis");

    if (currentPage > 1) pages.push(currentPage - 1);
    pages.push(currentPage);
    if (currentPage < totalPages) pages.push(currentPage + 1);

    if (currentPage < totalPages - 2) pages.push("ellipsis");
    if (currentPage < totalPages - 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Select
          value={activeStatus}
          onValueChange={(value) => {
            setActiveStatus(value as ProductStatus);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select active status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select active status</SelectLabel>
              <SelectItem value="all">All products</SelectItem>
              <SelectItem value="active">Active products</SelectItem>
              <SelectItem value="pending">Pending products</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {pagination && (
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {getPageItems().map((item, idx) =>
                item === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${idx}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={item}>
                    <PaginationLink
                      href="#"
                      isActive={item === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(item);
                      }}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Packaging</TableHead>
            <TableHead>Deposit</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Registered At</TableHead>
            <TableHead>Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isProductsLoading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <TableRow key={idx} className="animate-pulse">
                  <TableCell>
                    <Skeleton className="h-4 w-32 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-12 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-8 rounded" />
                  </TableCell>
                </TableRow>
              ))
            : productsResponse?.data.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.packaging}</TableCell>
                  <TableCell>${product.deposit.toFixed(2)}</TableCell>
                  <TableCell>{product.volume} ml</TableCell>
                  <TableCell>{formatDate(product.registeredAt)}</TableCell>
                  <TableCell>{product.active ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
}
