import clsx from "clsx";

const Typography = ({ variant, children, weight, color }) => {

    if (variant == "h1") {
        return (
            <h1 className={clsx("text-3xl md:text-5xl lg:text-6xl", weight, color)}>
                {children}
            </h1>
        );
    }

    if (variant == "h2") {
        return (
            <h2 className={clsx("text-slate-700 text-2xl sm:text-3xl", weight, color)}>
                {children}
            </h2>
        );
    }

    if (variant == "h3") {
        return (
            <h3 className={clsx("", weight, color)}>{children}</h3>
        );
    }

}

export default Typography;