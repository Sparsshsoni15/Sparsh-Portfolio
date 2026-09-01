import Ballpit from "./Ballpit";

function Background() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      <Ballpit
        count={100}
        gravity={0.01}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
        colors={[0x8b5cf6, 0x3b82f6, 0xa855f7]}
        minSize={0.5}
        maxSize={1}
      />
    </div>
  );
}

export default Background;