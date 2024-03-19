import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>จอง&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>ห้องพัก&nbsp;</h1>
        <br />
        <h1 className={title()}>ได้อย่างง่ายดายและสะดวกรวดเร็ว</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          ระบบจองห้องพักที่ใช้งานง่ายและมีประสิทธิภาพ
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          // isExternal
          href={"/BookingForm"}
          className={`
				${buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
        })}
          bg-gradient-to-tr
          from-pink-500
          to-yellow-500
          text-white
          shadow-lg
			`}
        >
          จองเลย
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
