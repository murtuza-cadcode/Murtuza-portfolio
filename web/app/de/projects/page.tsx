import { Projects } from "@/components/pages/Projects";
import { pageMeta } from "@/i18n/meta";

export const metadata = pageMeta("de", "projects");

export default function Page() {
  return <Projects locale="de" />;
}
