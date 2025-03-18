import SearchCompoent from "./components/SearchCompoent";

export default function Home() {
  async function onSubmit(formdata) {
    "use server";
    console.log(formdata.get("username"));
  }
  return (
    <div className="w-full p-4">
      <SearchCompoent />
      <h1>this is home page</h1>
    </div>
  );
}
