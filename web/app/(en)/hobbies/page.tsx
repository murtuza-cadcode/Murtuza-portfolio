import { Hobbies } from "@/components/pages/Hobbies";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("en", "hobbies");

export default function Page() {
  return <Hobbies locale="en" />;
}
