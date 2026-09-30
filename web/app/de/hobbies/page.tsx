import { Hobbies } from "@/components/pages/Hobbies";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("de", "hobbies");

export default function Page() {
  return <Hobbies locale="de" />;
}
