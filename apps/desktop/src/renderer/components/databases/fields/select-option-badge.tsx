import { cn } from '@/shared/lib/utils';
import { getSelectOptionColorClass } from '@/shared/lib/databases';

interface SelectOptionBadgeProps {
  name: string;
  color: string;
}

export const SelectOptionBadge = ({ name, color }: SelectOptionBadgeProps) => {
  return (
    <div
      className={cn(
        'line-clamp-1 inline-flex w-max items-center rounded-md border px-1 py-0.5 text-xs',
        'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        getSelectOptionColorClass(color)
      )}
    >
      {name}
    </div>
  );
};
