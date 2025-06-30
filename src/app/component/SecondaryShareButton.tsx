
import React from "react";

interface SecondaryShareButtonprops {
    text: string;
    iconSrc: string;
    onClick?: () => void;
    className?: string;
}

export default function SecondaryShareButton({
    text,
    iconSrc,
    onClick,
    className = "",
}: SecondaryShareButtonprops) {
    return (
        <button
            onClick={onClick}
            className={`0 border p-3 rounded-full flex gap-2 items-center cursor-pointer ${className}`}
        >
            <img
                width="25"
                height="10"
                src={iconSrc}
                alt="icon"
                className={`rounded-full border bg-white -ml-[14px] cursor-pointer ${className}`}
            />
            <p>{text}</p>
        </button>



    )
}