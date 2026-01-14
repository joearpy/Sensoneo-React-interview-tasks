import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

type PackagingSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PackagingSelect({ value, onChange }: PackagingSelectProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
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
  );
}
