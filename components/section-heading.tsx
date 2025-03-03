import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
  badge?: string
}

export function SectionHeading({ title, description, align = "center", className, badge }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {badge && (
        <Badge variant="outline" className="border-primary text-primary">
        {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

