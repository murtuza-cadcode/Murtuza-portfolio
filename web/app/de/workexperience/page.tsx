import { Work } from "@/components/pages/Work";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("de", "work");

export default function Page() {
  return <Work locale="de" />;
}
