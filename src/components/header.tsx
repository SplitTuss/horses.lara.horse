import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-purple-700 h-25 flex items-center justify-between">
      <img src="/favicon.ico" alt="horses.lara.horse.io logo" className="w-20 h-20 rounded-lg ml-2" />
      {/* <div className='text-3xl text-primary'>horses.lara.horse</div> */}
       <div className='flex justify-end gap-6 mr-6'>
        <Link href="https://sso-log.lara.horse/">
          <p>SSO-log</p>
        </Link>
        <Link href="https://laracraft.io">
          <p>laracraft.io</p>
        </Link>
       </div>
    </div>
  );
}

