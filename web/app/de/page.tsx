import { Home } from "@/components/pages/Home";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("de", "home");

export default function Page() {
  return <Home locale="de" />;
}
