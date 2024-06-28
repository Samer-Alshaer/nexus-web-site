export default {
  root: ({ context, props }) => ({
    class: [
      // Position and Shadows
      "absolute",
      "p-fadein",
      // Spacing
      {
        "py-0 px-1":
          context?.right ||
          context?.left ||
          (!context?.right &&
            !context?.left &&
            !context?.top &&
            !context?.bottom),
        "py-1 px-0": context?.top || context?.bottom,
      },
    ],
  }),
  arrow: ({ context, props }) => ({
    class: [
      // Position

      "absolute",

      // Size
      "w-0",
      "h-0",

      // Shape
      "border-transparent",
      "border-solid",
      {
        "border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-slate-200 dark:border-r-gray-800":
          context?.right ||
          (!context?.right &&
            !context?.left &&
            !context?.top &&
            !context?.bottom),
        "border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-slate-200 dark:border-l-gray-800":
          context?.left,
        "border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-slate-200 dark:border-t-gray-800":
          context?.top,
        "border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-slate-200 dark:border-b-gray-800":
          context?.bottom,
      },

      // Spacing
      {
        "-mt-1 ":
          context?.right ||
          (!context?.right &&
            !context?.left &&
            !context?.top &&
            !context?.bottom),
        "-mt-1": context?.left,
        "-ml-1": context?.top || context?.bottom,
      },
    ],
  }),
  text: {
    class: [
      "p-2",
      "text-[10px]",
      "bg-white dark:bg-gray-800 dark:text-white border dark:border-0 shadow-xl",
      "leading-none",
      "whitespace-pre-line",
      "break-words",
      "rounded-base",
    ],
  },
};
