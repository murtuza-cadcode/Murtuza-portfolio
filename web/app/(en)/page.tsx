import { Home } from "@/components/pages/Home";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("en", "home");

export default function Page() {
  return <Home locale="en" />;
}
