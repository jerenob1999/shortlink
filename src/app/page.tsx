import Input from "@/components/ui/Input";
import Title from './_components/Title';
import Button from '@/components/ui/form/Button';
import Card from "@/components/ui/card/Card";

export default function Home() {
  return (
    <main className="h-full">
      <section className="h-2/5 p-24 flex-col">
        <Title/>
        <div className='flex items-center mt-8'>
          <Input
            placeholder="Copy your URL here"
            className="h-12 rounded-lg p-2 border-2 border-slate-400"
          />
          <div className='ml-2'>
            <Button
              title='Shorten'
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-200 h-3/5 px-24 py-10">
      <h5 className="font-bold text-4xl text-slate-900 text-center">Why ShortLink?</h5>
      <ul>
        <li>100% free.</li>
        <li>Easy to use.</li>
        <li>User friendly dashboard to manage your urls.</li>
      </ul>
      </section>
    </main>
  );
}
