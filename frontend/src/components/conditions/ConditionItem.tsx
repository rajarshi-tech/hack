interface ConditionItemProps {
  label: string;
  value: string;
}

export function ConditionItem({ label, value }: ConditionItemProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-3">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
