import { cn } from "../../lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// Card skeleton for auto parts
const AutoPartCardSkeleton = () => {
  return (
    <div className="group relative rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700" />

      <div className="p-4">
        <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700">
          <Skeleton className="w-full h-full bg-gray-200 dark:bg-gray-700" />
        </div>

        <Skeleton className="h-4 w-3/4 mx-auto mb-2 bg-gray-200 dark:bg-gray-700" />

        <div className="flex items-center justify-center gap-2 mb-2">
          <Skeleton className="h-3 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-3 w-20 bg-gray-200 dark:bg-gray-700" />
        </div>

        <Skeleton className="h-8 w-full bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="px-4 pb-4">
        <Skeleton className="h-3 w-16 mx-auto bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
};

// Hero section skeleton
const HeroSkeleton = () => {
  return (
    <div className="relative min-h-screen h-[120vh] overflow-hidden bg-gray-200 dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800" />

      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex-1 text-center xl:text-left mb-6 lg:mb-8 xl:mb-0 px-2 pt-20 sm:pt-24 lg:pt-32 xl:pt-0 hidden lg:block">
          <Skeleton className="h-16 w-3/4 mb-6 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-16 w-2/3 mb-6 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-12 w-40 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg xl:ml-8 w-full lg:flex-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
            <Skeleton className="h-8 w-3/4 mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-10 w-full mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-10 w-full mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-10 w-full mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-12 w-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Brands skeleton
const BrandsSkeleton = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <Skeleton className="h-8 w-64 mx-auto mb-8 bg-gray-200 dark:bg-gray-700" />
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <Skeleton className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Skeleton, AutoPartCardSkeleton, HeroSkeleton, BrandsSkeleton };
