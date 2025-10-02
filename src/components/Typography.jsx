import clsx from "clsx";

const Typography = ({ variant, children, weight, color }) => {

    if (variant == "h1") {
        return (
            <h1 className={clsx("text-4xl md:text-6xl leading-tight tracking-tight text-[#272343]", weight, color)}>
                {children}
            </h1>
        );
    }

    if (variant == "h2") {
        return (
            <h2 className={clsx("text-3xl md:text-4xl text-[#272343] mb-8 text-center", weight, color)}>
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