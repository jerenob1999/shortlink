import Input from "@/components/ui/form/Input";
import Title from "./_components/Title";
import Button from "@/components/ui/form/Button";
import LandingCard from "@/app/_components/LandingCardContainer/LandingCardContainer";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-between">
      <section className="h-2/5 p-24 flex-col">
        <Title />
        <div className="flex items-center max-w-lg mt-8">
          <Input
            placeholder="Copy your URL here"
            className="h-12 rounded-lg p-2"
          />
          <div className="ml-2 ">
            <Button>Shorten</Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-200 h-3/6 flex flex-col justify-center">
        <h5 className="font-bold text-4xl text-slate-900 text-center">
          Why ShortLink?
        </h5>
        <LandingCard />
      </section>
    </main>
  );
}
