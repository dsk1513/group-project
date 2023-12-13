import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Header from "@/components/Header";
import '/Users/dineshchalla/Desktop/keith/group-project/keith/styles/globals.css'; // Import the CSS file

export default function Home() {
    return (
        <div className="header-top">
            <Header />
        </div>
    );
}
