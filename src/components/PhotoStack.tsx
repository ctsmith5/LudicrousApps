import React from "react";

interface PhotoStackProps {
  photoPath: string;
  title?: string;
  subtitle?: string;
}

const PhotoStack: React.FC<PhotoStackProps> = ({
  photoPath,
  title,
  subtitle,
}) => {
  return (
    // 1. Container: Sets the stage. 'relative' allows us to position children absolutely within it.
    <div className="group relative w-full h-[400px] overflow-hidden rounded-2xl shadow-md">
      {/* 2. The Image: background, rounded corners come from parent overflow-hidden */}
      <img
        src={photoPath}
        alt={title || "Photo"}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* 3. The Callout Box: Absolute position places it ON TOP of the image */}
      {title && subtitle && (
        <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white p-5 shadow-xl dark:bg-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoStack;
