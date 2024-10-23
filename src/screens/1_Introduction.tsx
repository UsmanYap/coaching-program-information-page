import Footer from "@components/_shared/Footer";
import Header from "@components/1-Introduction/A_Header";
import WelcomeText from "@components/1-Introduction/B_WelcomeText";

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
          nextPage={{ label: "Kurikulum", to: "curriculum" }}
          appearDelay={1.5}
        />
      </div>
    </div>
  );
};

export default IntroductionScreen;
