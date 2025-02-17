import { Check } from "lucide-react";

type Props = {
  symptom: string;
};

function Symptom({ symptom }: Props) {
  return (
    <li className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500" />
      {symptom}
    </li>
  );
}

export default Symptom;
