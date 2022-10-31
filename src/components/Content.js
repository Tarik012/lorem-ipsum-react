import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="content">
      <Title nameTitle={props.name} />
      <Description />
    </div>
  );
};

export default Content;
