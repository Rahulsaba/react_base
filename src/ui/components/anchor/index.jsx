import { Link } from "react-router-dom";


export default function Links({ path, content, className, onClick, icon }) {
    return (
        <>
            <Link to={path} className={`link_primary capitalize  ${className}`} onClick={onClick}>
                {icon && icon} {content}
            </Link>
        </>

    )
}