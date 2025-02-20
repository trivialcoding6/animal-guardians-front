import { Skeleton } from "../ui/skeleton";

function DetailPageSkeleton() {
  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-10">
      <section className="space-y-2 text-center">
        <Skeleton className="h-8 w-48 mx-auto" />
        <hr className="mx-auto w-full border-gray-100" />
      </section>

      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <Skeleton className="h-7 w-36 mx-auto" />
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-[300px] h-[300px] rounded-md" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <Skeleton className="h-7 w-36 mx-auto" />
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <Skeleton className="h-20 w-full" />
      </section>

      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-7 w-36 mx-auto" />
              <hr className="mx-auto w-full border-gray-100" />
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <Skeleton className="h-7 w-36 mx-auto" />
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <div className="bg-blue-50 p-4 rounded space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-6 w-full" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DetailPageSkeleton;
