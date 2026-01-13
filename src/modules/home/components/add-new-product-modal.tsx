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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CreateProductInput } from "../../../types";
import { createProductSchema } from "../../../schemas/create-product-schema";
import { useState } from "react";
import { CompanySelect } from "../../../components/company-select";
import { UserSelect } from "../../../components/user-select";
import { PackagingSelect } from "../../../components/packaging-select";

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
            <Label className="mb-3">Name</Label>
            <Input {...register("name")} placeholder="Coca Cola" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label className="mb-3">Packaging</Label>
            <Controller
              control={control}
              name="packaging"
              render={({ field }) => (
                <PackagingSelect
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.packaging && (
              <p className="text-red-500 text-sm">{errors.packaging.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label className="mb-3">Volume (ml)</Label>
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
            <Label className="mb-3">Deposit (cents)</Label>
            <Input
              {...register("deposit", { valueAsNumber: true })}
              placeholder="25"
              type="number"
            />
            {errors.deposit && (
              <p className="text-red-500 text-sm">{errors.deposit.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label className="mb-3">Companies</Label>
            <Controller
              control={control}
              name="companyId"
              render={({ field }) => (
                <CompanySelect value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.companyId && (
              <p className="text-red-500 text-sm">{errors.companyId.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label className="mb-3">Registered By</Label>
            <Controller
              control={control}
              name="registeredById"
              render={({ field }) => (
                <UserSelect value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.registeredById && (
              <p className="text-red-500 text-sm">
                {errors.registeredById.message}
              </p>
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
