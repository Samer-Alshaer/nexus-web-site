export default {
    root: ({ context, props }) => ({
        class: [
            // Position
            'absolute',
            // Spacing
            {
                'px-1.5': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                'py-1.5': context?.top || context?.bottom
            }
        ]
    }),
    arrow: {
        class: 'hidden'
    },
    text: {
        class: [
            // Size
            'text-xs leading-none',

            // Spacing
            'p-2',

            // Shape
            'rounded-lg',

            // Color
            'text-white dark:text-surface-0/80',
            'bg-[#262626] dark:bg-white border border-5 border-[#2b2929] outline-[0px] shadow-[0]',
            'ring-surface-200 dark:ring-surface-800 ring-offset-0',

            // Misc
            'whitespace-pre-line',
            'break-words'
        ]
    }
};
