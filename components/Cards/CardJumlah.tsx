import React from "react";

interface CardJumlahProps {
  total: number;
  title: string;
}

export const CardJumlah: React.FC<CardJumlahProps> = ({total, title}) => {
  
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-4 text-wrap text-center">
      <h1 className="text-6xl font-bold">{total}</h1>
      <p className="font-medium">{title}</p>
    </div>
  );
}
