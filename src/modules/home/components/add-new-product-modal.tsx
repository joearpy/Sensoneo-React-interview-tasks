import { Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/alert-dialog";
import { Button } from "../../../components/button";
import { useCreateProduct } from "../../../hooks/use-create-products";
import { Label } from "../../../components/label";
import { Input } from "../../../components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CreateProductInput } from "../../../types";
import { createProductSchema } from "../../../schemas/createProductSchema";
import { useState } from "react";

export function AddNewProductModal() {
  const { mutate, isPending } = useCreateProduct();
  const [open, setOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProductInput>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      packaging: "",
      deposit: 0,
      volume: 0,
      // Todo: Replace with actual user and company IDs
      companyId: 1,
      registeredById: 1,
    },
  });

  const onSubmit = (data: CreateProductInput) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <Label>Name</Label>
            <Input {...register("name")} placeholder="Coca Cola" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label>Packaging</Label>
            <Controller
              control={control}
              name="packaging"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a packaging" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Packaging</SelectLabel>
                      <SelectItem value="can">Can</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="tetra">Tetra</SelectItem>
                      <SelectItem value="pet">Pet</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.packaging && (
              <p className="text-red-500 text-sm">{errors.packaging.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label>Volume (ml)</Label>
            <Input
              {...register("volume", { valueAsNumber: true })}
              placeholder="330"
              type="number"
            />
            {errors.volume && (
              <p className="text-red-500 text-sm">{errors.volume.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label>Deposit (cents)</Label>
            <Input
              {...register("deposit", { valueAsNumber: true })}
              placeholder="25"
              type="number"
            />
            {errors.deposit && (
              <p className="text-red-500 text-sm">{errors.deposit.message}</p>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => reset()}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit" disabled={isPending}>
              Add
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
