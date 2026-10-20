import { useTheme } from "../../contexts/ThemeProvider";
import SplitText from "../animated/SplitText";
import "./header.css"

const Header = () => {
  const { theme } = useTheme();

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <header className={`header ${theme}`}>
      <div className={`header_container  ${theme}`}>
        <h1 className="w-full mt-12 mb-6 text-6xl font-bold text-center text-blue-800 shadow-white">
          <SplitText
            text="Black Friday BuyTech"
            className="text-2xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
        </h1>
        <h4 className="w-10/12 text-center text-white bg-blue-400 rounded-lg lg:w-6/12">
          Tudo pela METADE
          <span className="text-[10px]">...do triplo</span>
          !!!
        </h4>
      </div>
    </header>
  );
};

export default Header;
