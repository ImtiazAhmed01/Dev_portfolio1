import { ReactNode } from "react";

interface ShareButtonProps {
    text: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    border?: string;
}

export default function ShareButton({
    text,
    icon,
    iconPosition = "right",
    border = "border-white",
}: ShareButtonProps) {
    const iconButtonClass = `rounded-full border ${border} w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition`;
    const textButtonClass = `border ${border} rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition`;

    return (
        <div className="flex items-center">
            {iconPosition === "left" && icon && (
                <button className={iconButtonClass}>
                    {icon}
                </button>
            )}

            <button className={textButtonClass}>
                {text}
            </button>

            {iconPosition === "right" && icon && (
                <button className={iconButtonClass}>
                    {icon}
                </button>
            )}
        </div>
    );
}
