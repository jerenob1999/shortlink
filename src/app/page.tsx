import Input from "@/components/ui/form/Input";
import Title from "./_components/Title";
import Button from "@/components/ui/form/Button";
import Card from "@/components/ui/card/Card";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import bestprice from "../../public/best-price.png";
import shield from "../../public/shield.png";
import userFriendly from "../../public/user-friendly.png";

export default function Home() {
  return (
    <main className="h-full">
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
      <section className="bg-slate-200 h-3/5 px-24 py-10">
        <h5 className="font-bold text-4xl text-slate-900 text-center">
          Why ShortLink?
        </h5>
        <div className="flex justify-center mt-12 ">
          <Card className="h-72 w-1/3 m-2 flex flex-col justify-between p-8 max-w-96">
            <div className="flex justify-center">
              <Image className="w-24" src={userFriendly} alt={"logo"} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 min-w-8 text-3xl" />
              </div>
              <p className="font-medium text-base text-slate-900">
                Intuitive interface and easy to use.
              </p>
              <p className="font-normal text-slate-500 text-sm">
                Once Login, you will have access to all of our premium features
                without needing your credit card account.
              </p>
            </div>
          </Card>

          <Card className="h-72 w-1/3 m-2 flex flex-col justify-between p-8 max-w-96">
            <div className="flex justify-center">
              <Image className="w-24" src={shield} alt={"logo"} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-3xl min-w-8" />
              </div>
              <p className="font-medium text-base text-slate-900">
                Data and statistics 100% secure.
              </p>
              <p className="font-normal text-slate-500 text-sm">
                Once Login, you will have access to all of our premium features
                without needing your credit card account.
              </p>
            </div>
          </Card>

          <Card className="h-72 w-1/3 m-2 flex flex-col justify-between p-8 max-w-96">
            <div className="flex justify-center">
              <Image className="w-24" src={bestprice} alt={"logo"} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-3xl min-w-8" />
              </div>
              <p className="font-medium text-base text-slate-900">
                30 days of trial 100% Free.
              </p>
              <p className="font-normal text-slate-500 text-sm">
                Once Login, you will have access to all of our premium features
                without needing your credit card account.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
