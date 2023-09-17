import ReactPlayer from "react-player";
import ChannelDetail from "../components/ChannelDetail";
import Loading from "../components/Loading";

import { useParams } from "react-router-dom";
import { getData } from "../helpers";
import RelatedContents from "../components/RelatedContents";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
const VideoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedContents, setRelatedContents] = useState(null);
  const { videoId } = useParams();
  useEffect(() => {
    setDetail(null);
    setRelatedContents(null);
    getData(`/video/details/?id=${videoId}`)
      .then((detail) => setDetail(detail))
      .catch((error) => console.log("detailError", error));

    getData(`/video/related-contents/?id=${videoId}`).then((relatedData) => {
      setRelatedContents(relatedData.contents);
    });
  }, [videoId]);
  //console.log('detailState',detail)
  console.log("statecont", relatedContents);
  return (
    <div className="lg:px-[100px] flex flex-col gap-5 lg:flex-row min-h-[95vh] text-white   bg-[#0f0f0f]">
      <SideNav />
      <div>
        <ReactPlayer
          width={"100%"}
          height={"500px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
        {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
      </div>
      {!relatedContents ? (
        <Loading />
      ) : (
        <RelatedContents contents={relatedContents} />
      )}
    </div>
  );
};

export default VideoDetail;
