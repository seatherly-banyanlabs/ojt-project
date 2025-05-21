import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
export function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Button size="md" variant="primary">
          Shop Collection
        </Button>
        <div className="">
          <Paragraph as="p" variant="body" className="max-w-xl">
            Discover our new collection of premium shoes designed for both
            comfort and style. Crafted with the finest materials and attention
            to detail.
          </Paragraph>
        </div>
      </div>
    </>
  );
}
export default App;