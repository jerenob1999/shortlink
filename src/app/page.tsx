import Input from "@/components/ui/Input";
import Title from "./_components/Title";
import Button from "@/components/ui/form/Button";
import Card from "@/components/ui/card/Card";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import bestprice from "../../public/best-price.png";
import shield from "../../public/shield.png";
import userFriendly from "../../public/user-friendly.png";
import { CiUser } from "react-icons/ci";

export default function Home() {
  return (
    <main className="h-full">
      <section className="h-2/5 p-24 flex-col">
        <Title />
        <div className="flex items-center mt-8">
          <Input
            placeholder="Copy your URL here"
            className="h-12 rounded-lg p-2 border-2 border-slate-400"
          />
          <div className="ml-2">
            <Button title="Shorten" />
          </div>
        </div>
      </section>
      <section className="bg-slate-200 h-3/5 px-24 py-10">
        <h5 className="font-bold text-4xl text-slate-900 text-center">
          Why ShortLink?
        </h5>
        <div className="flex justify-between mt-12 w-2/4">
          <Card>
            <Image className="w-24" src={userFriendly} alt={"logo"} />
            <div className="flex items-center">
              <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-2xl mr-2" />
              <p className="font-semibold text-lg text-slate-900">
                Intuitive interface and easy to use.
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex justify-center">
              <Image className="w-24" src={shield} alt={"logo"} />
            </div>
            <div className="flex items-center">
              <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-2xl mr-2" />
              <p className="font-semibold text-lg text-slate-900">
                Intuitive interface and easy to use.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex justify-center">
              <Image className="w-24" src={bestprice} alt={"logo"} />
            </div>
            {/* <CiUser className="text-6xl"/> */}
            <div className="flex items-center">
              <IoMdCheckmarkCircleOutline className="font-semibold text-green-600 text-2xl mr-2" />
              <p className="font-semibold text-lg text-slate-900">
                Intuitive interface and easy to use.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
