import { PortfolioTabs } from "./PortfolioTabs";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="space-y-4 text-center">
        <h4 className="sub-heading">
          Visit my portfolio and keep your feedback
        </h4>
        <h2 className="text-lightn">My Portfolio</h2>
      </div>

      <PortfolioTabs />
    </section>
  );
}
