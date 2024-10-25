interface Props {
  title: string;
  icon?: JSX.Element;
}

const ScreenTitle = (props: Props) => {
  const { title, icon } = props;

  return (
    <div className="py-5 pt-10 text-center flex gap-3 justify-center items-center">
      <div className="text-white">{icon}</div>
      <span className="text-3xl font-semibold text-white">{title}</span>
    </div>
  );
};

export default ScreenTitle;
