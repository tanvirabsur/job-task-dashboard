import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between">
      <p>home</p>
      <ul className="flex gap-5">
        <li><Link href={`/posts`}>Posts</Link></li>
        <li><Link href={`/users`}>Users</Link></li>
      </ul>
    </div>
  );
}
