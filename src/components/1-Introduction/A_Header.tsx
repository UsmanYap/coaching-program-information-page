import logoMDP from "@assets/logo-mdp-white.png";
import logoProcom from "@assets/logo-procom.png";
import SlideIn from "@common/components/Animated/SlideIn";

const Header = () => {
  return (
    <div className="max-h-32">
      <div className="flex w-fit ms-auto items-center pe-3">
        <SlideIn from="top">
          <img src={logoMDP} className="h-20" alt="Logo MDP" />
        </SlideIn>
        <SlideIn from="top" delay={0.2}>
          <img src={logoProcom} className="h-12" alt="Logo Procom" />
        </SlideIn>
      </div>
    </div>
  );
};

export default Header;
