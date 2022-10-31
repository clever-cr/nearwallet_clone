import Link from "next/link";
function page2() {
  return (
    <div className="py-56">
      <p className="text-center text-7xl text-primary">page2</p>
      <Link href="/">
        <h2 className="text-center text-7xl text-primary"> Back Home</h2>
      </Link>
    </div>
  );
}
export default page2;
