import BounceIn from "@common/components/Animated/BounceIn";
import DiagonalAppear from "@common/components/Animated/DiagonalAppear";
import inject from "@common/utils/inject";

const WelcomeText = () => {
  return (
    <div className="flex h-full">
      <div className="text-white m-auto text-center flex flex-col gap-10">
        {/* Coaching Program Text */}
        <section className="flex flex-col text-[3.5rem] font-semibold">
          <BounceIn from="left" delay={0.5}>
            <span>Coaching</span>
          </BounceIn>
          <BounceIn from="right" delay={0.5} className="-mt-5">
            <span>Program</span>
          </BounceIn>
        </section>

        {/* UKM Programming Text */}
        <DiagonalAppear delay={1} duration={1.5}>
          <section className="relative flex flex-col text-[2rem] font-semibold text-4xl">
            {/* White Text Layer */}
            <div className="absolute inset-0 text-procom-orange-light clip-diagonal flex flex-col">
              <div>
                <span className="text-3xl">UKM</span>
                <span className="-mt-3">{"<Programming />"}</span>
              </div>
              <span className="-mt-1 text-xl">
                - {inject("introduction", "angkatan")} -
              </span>
            </div>

            {/* Black Text Layer */}
            <div className="text-procom-purple-light flex flex-col">
              <div>
                <span className="text-3xl">UKM</span>
                <span className="-mt-3">{"<Programming />"}</span>
              </div>
              <span className="-mt-1 text-xl">
                - {inject("introduction", "angkatan")} -
              </span>
            </div>
          </section>
        </DiagonalAppear>
      </div>
    </div>
  );
};

export default WelcomeText;
