"use client";

import clsx from "clsx";
import type { ChangeEvent } from "react";

interface inputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function InputContact({
  type,
  id,
  name,
  placeholder,
  onChange,
  required = true,
  value,
}: inputProps) {
  const inputClass = clsx(
    "border-2",
    "border-setup-secundary",
    "px-4",
    "py-2",
    "rounded-md",
    "mb-4",
    "w-full",
    "text-sm",
    "h-10",
  );

  return (
    <input
      className={inputClass}
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      required={required}
      value={value}
    />
  );
}
