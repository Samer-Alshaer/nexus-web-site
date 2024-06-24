export default {
  accordiontab: {
    root: {
      class: "mb-3",
    },
    header: ({ props }) => ({
      class: [
        // State
        {
          "select-none pointer-events-none cursor-default opacity-60":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ context }) => ({
      class: [
        //Font
        "font-bold",
        "leading-none",

        //text
        "text-sm md:text-[1em]",

        // Alignments
        "flex items-center md:flex-row-reverse md:justify-between gap-2",
        "relative",

        // Sizing
        "p-5",

        // Shape
        "rounded-t-base",
        {
          "rounded-br-base rounded-bl-base": !context.active,
          "rounded-br-0 rounded-bl-0 bg-gray-100/50 dark:bg-color1":
            context.active,
        },

        // Color
        "border border-borderColor",
        "text-black dark:text-white",

        // Transition
        "transition duration-200 ease-in-out",
        "transition-shadow duration-200",

        // States
        "hover:bg-color1",
        "focus:ring-2 focus:ring-primary",

        // Misc
        "cursor-pointer no-underline select-none",
      ],
    }),
    headerIcon: {
      class: "inline-block",
    },
    headerTitle: {
      class: "leading-7",
    },
    content: {
      class: [
        // Spacing
        "p-5",

        //Shape
        "rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg",
        "border-t-0",

        // Color
        "bg-surface-0 dark:bg-surface-800",
        "border border-borderColor",
        "text-black dark:text-white",
      ],
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass:
        "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass:
        "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0",
    },
  },
};
