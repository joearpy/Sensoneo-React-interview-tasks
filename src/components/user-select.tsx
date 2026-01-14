import { useUsers } from "../hooks/use-users";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

type UserSelectProps = {
  value?: number;
  onChange: (value: number) => void;
};

export function UserSelect({ value, onChange }: UserSelectProps) {
  const { data: users } = useUsers();

  return (
    <Select
      onValueChange={(val) => onChange(Number(val))}
      value={value !== undefined ? String(value) : undefined}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Users</SelectLabel>
          {users?.data.map((user) => (
            <SelectItem key={user.id} value={user.id.toString()}>
              {user.firstName} {user.lastName} - {user.email}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
