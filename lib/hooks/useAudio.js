import { useMemo, useState, useEffect } from "react";

export default ({url, itemIndex, totalCount, timeout}) => {
  const createAudio = url => {
    const audio = new Audio(url)
    audio.addEventListener("loadeddata", function() {
      audio.play();
    });
    audio.load();
    return audio;
  }
  const audio = useMemo(() => createAudio(url), ["fix"]);
  const handler = () => {
    audio.pause()
  }
  const udpateAudio = url => {
    audio.pause()
    audio.setAttribute('src', url);
    audio.load();
    if (itemIndex === totalCount) {
      const id = setInterval(handler, timeout);
      return () => clearInterval(id);
    }
  }
  useEffect(() => {
    udpateAudio(url)
  }, [itemIndex]);
};