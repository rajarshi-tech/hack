import { Separator } from "@/components/ui/separator";
import { ConditionItem } from "./ConditionItem";

const conditions = [
  { label: "SST", value: "27.4°C" },
  { label: "Wind", value: "18 km/h" },
  { label: "Waves", value: "1.4 m" },
  { label: "Risk", value: "Low" },
];

export function ConditionsBar() {
  return (
    <div className="border-t bg-background">
      <div className="flex items-stretch">
        {conditions.map((condition, index) => (
          <div key={condition.label} className="flex flex-1 items-stretch">
            <ConditionItem label={condition.label} value={condition.value} />
            {index < conditions.length - 1 && (
              <Separator orientation="vertical" className="h-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
