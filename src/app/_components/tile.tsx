import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ComponentProps } from 'react';

type TileProps = ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
};

export function Tile({ icon: Icon, label, className, ...options }: TileProps) {
  return (
    <Card className={cn('hover:bg-card/80 w-40 py-3', className)} {...options}>
      <CardContent className="space-y-2 px-3">
        <Icon size={20} />
        <span className="stroke-muted-foreground">{label}</span>
      </CardContent>
    </Card>
  );
}
