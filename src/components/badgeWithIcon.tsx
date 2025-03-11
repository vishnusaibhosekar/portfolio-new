import { Icons } from "@/components/icons";

interface BadgeWithIconProps {
  skill: {
    name: string;
    icon: JSX.Element; // Icon for the skill
  };
}

export function BadgeWithIcon({ skill }: BadgeWithIconProps) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-2 shadow-md">
      {skill.icon}
      <span className="text-sm font-medium text-white">{skill.name}</span>
    </div>
  );
}
