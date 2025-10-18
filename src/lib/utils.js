import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export const class_name = (...classes) => {
    return twMerge(
        clsx(...classes)
    )
}