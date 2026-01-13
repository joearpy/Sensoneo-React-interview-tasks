import { useCompanies } from "../hooks/use-companies";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

type CompanySelectProps = {
  value?: number;
  onChange: (value: number) => void;
};

export function CompanySelect({ value, onChange }: CompanySelectProps) {
  const { data: companies } = useCompanies();

  return (
    <Select
      onValueChange={(val) => onChange(Number(val))}
      value={value !== undefined ? String(value) : undefined}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Companies</SelectLabel>
          {companies?.data.map((company) => (
            <SelectItem key={company.id} value={company.id.toString()}>
              {company.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
