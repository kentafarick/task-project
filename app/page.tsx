import Header from "./components/layout/Header/Header";
import About from "./components/sections/About/About";
import Cover from "./components/sections/Cover/Cover";

export default function Home() {
    return (
        <>
            <Header />
            <Cover />
            <About />
        </>
    );
}
