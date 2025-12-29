import { Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/alert-dialog";
import { Button } from "../../../components/button";
import { useCreateProduct } from "../../../hooks/useCreateProducts";

export function AddNewProductModal() {
  const { mutate, isPending } = useCreateProduct();

  const handleCreate = () => {
    mutate({
      name: "Coca Cola",
      packaging: "can",
      deposit: 25,
      volume: 330,
      companyId: 1,
      registeredById: 1,
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className="mr-2" />
          Add new product
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new product</AlertDialogTitle>
        </AlertDialogHeader>
        Form
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleCreate} disabled={isPending}>
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
