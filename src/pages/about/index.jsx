import DocumentTitle from "@/helpers/DocumentTitle";
import { Links } from "@/path";

export default function About() {
    DocumentTitle('About');
    return (
        <div className="h-[calc(100vh-64px)]  dark:bg-black dark:text-white">
            About
        </div>
    )
}