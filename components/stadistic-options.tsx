import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownOptionsProps = {
  options: string[];
  handleOptionChange: (value: string) => void;
  value: string | number;
} 

const DropdownOptions: React.FC<DropdownOptionsProps> = ({ options,  handleOptionChange, value }) => {
  return (
    <Select defaultValue={'Seleccionar'} onValueChange={handleOptionChange} >
      <SelectTrigger className=" bg-white">
        <SelectValue placeholder="Seleccionar" className="capitalize">
          {value || "Seleccionar"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option, i) => (
          <SelectItem key={option + i} value={option} className="capitalize">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

DropdownOptions.displayName = 'DropdownOptions';
export default DropdownOptions;