function createScroller(test) {
  var scroller = createDiv(test);
  scroller.innerHTML = "<div class='contents'></div>";
  scroller.classList.add('scroller');
  return scroller;
}

function createScrollTimeline(test) {
  return new ScrollTimeline({
    scrollSource: createScroller(test),
    timeRange: 1000
  });
}

function createScrollTimelineWithOffsets(test) {
  return new ScrollTimeline({
    scrollSource: createScroller(test),
    orientation: "vertical",
    startScrollOffset: "20%",
    endScrollOffset: "80%",
    timeRange: 1000
  });
}

function createScrollLinkedAnimation(test, timeline) {
  if(timeline === undefined)
    timeline = createScrollTimeline(test);
  const DURATION = 1000; // ms
  const KEYFRAMES = { opacity: [1, 0] };
  return new Animation(
    new KeyframeEffect(createDiv(test), KEYFRAMES, DURATION), timeline);
}
