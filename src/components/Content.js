import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="content">
      <Title nameTitle={props.name} />
      <Description textDescription={props.text} />
    </div>
  );
};

export default Content;
