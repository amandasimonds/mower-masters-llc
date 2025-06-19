import React from "react";
import styles from "./scrim.module.scss";

type ScrimProps = {
    onClick: () => void;
    className?: string;
    isShowing: boolean;
};

const Scrim: React.FC<ScrimProps> = ({ onClick, isShowing, className = "" }) => {
    return isShowing &&
        <div className={`${styles.scrim} ${className}`} onClick={onClick}>
        </div>
}

export default Scrim;