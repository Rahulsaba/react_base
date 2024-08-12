import { Link } from "react-router-dom";


export default function Links({path,content,className}) {
    return (
        <>
            <Link to={path} className={'link_primary capitalize'||className}>
                 {content}
            </Link>
        </>

    )
}