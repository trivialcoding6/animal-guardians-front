import { Skeleton } from "../ui/skeleton";

function SectionSkeleton() {
  return (
    <div className="p-4">
      <Skeleton className="h-8 w-32 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-8 w-32 mt-6 mb-2" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
}

export default SectionSkeleton;
