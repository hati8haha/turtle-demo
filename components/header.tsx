import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="row-start-1 flex gap-6 flex-wrap items-start justify-between  ">
            <div className="flex gap-2 p-2 lg:p-4"><Logo /> <span className="font-blacks">Turtle Spot Taiwan</span></div>
            <Menu />
        </header>
    );
}

export default Header