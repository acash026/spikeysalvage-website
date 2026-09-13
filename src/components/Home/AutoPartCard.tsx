import { memo } from "react";
import LazyImage from "../ui/LazyImage";

interface AutoPartCardProps {
  part: {
    id: number;
    name: string;
    rating: number;
    image: string;
    condition: string;
    description: string;
    compatibility: string[];
    warranty: string;
    pageLink?: string;
  };
  onClick: () => void;
  priority?: boolean;
}

const AutoPartCard = memo<AutoPartCardProps>(
  ({ part, onClick, priority = false }) => {
    return (
      <div
        onClick={onClick}
        className="group relative rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
      >
        {/* Accent top bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70" />

        <div className="p-4">
          <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700">
            <LazyImage
              src={part.image}
              alt={part.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              containerClassName="w-full h-full"
              fallbackSrc="/api/placeholder/64/64"
              showSkeleton={true}
              loading={priority ? "eager" : "lazy"}
            />
          </div>

          <h3 className="font-semibold text-sm text-center mb-1 text-gray-900 dark:text-white line-clamp-1">
            {part.name}
          </h3>

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
            <span className="rounded-full px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
              {part.warranty}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              {part.compatibility.length}+ models
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 line-clamp-2 text-center">
            {part.description}
          </p>
        </div>

        <div className="px-4 pb-4">
          <div className="text-xs font-medium text-blue-600 dark:text-blue-400 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            Explore →
          </div>
        </div>
      </div>
    );
  }
);

AutoPartCard.displayName = "AutoPartCard";

export default AutoPartCard;
