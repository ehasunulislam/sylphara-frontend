
import ChantInput from "./_components/Main-Content/Chat/ChantInput";
import Welcome from "./_components/Main-Content/WelCome/Welcome";

export default function homePage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <Welcome />
      </div>

      <ChantInput /> 
    </div>
  );
}
