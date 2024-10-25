import Footer from "@components/_shared/Footer";
import Header from "@components/1-Introduction/A_Header";
import WelcomeText from "@components/1-Introduction/B_WelcomeText";
import BackgroundLogo from "@components/_shared/BackgroundLogo";

const IntroductionScreen = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <Header />
      </div>
      <div className="h-full">
        <WelcomeText />
      </div>
      <div className="mt-auto">
        <Footer
          nextPage={{
            label: "Kurikulum",
            to: "curriculum",
            direction: "right",
          }}
          appearDelay={1.5}
        />
      </div>

      <BackgroundLogo size="small" className="rotate-90 -left-16 -top-44" />
      <BackgroundLogo position="center" />
      <BackgroundLogo size="small" className="bottom-10 -right-40" />
      <BackgroundLogo className="rotate-90 -left-72 -bottom-72" />
    </div>
  );
};

export default IntroductionScreen;
