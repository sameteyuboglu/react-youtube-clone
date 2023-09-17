import VideoCard from "./VideoCard";
const RelatedContents = ({ className, contents }) => {
  return (
    <div className={className}>
      {contents?.map((content,index) => {
        return <VideoCard video={content?.video} key={index}/>;
      })}
    </div>
  );
};

export default RelatedContents;
