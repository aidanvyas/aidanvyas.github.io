export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Aidan Vyas</h1>
          <p className="text-xl opacity-80">
            Quantitative Research | Artificial Intelligence
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <p className="mb-6 opacity-90 leading-relaxed">
            I'm a senior at Rice University studying Economics and Computer
            Science with a deep passion for empirical asset pricing and
            artificial intelligence. Previously, I've worked as an investment
            research analyst at a Graham and Dodd-style discretionary asset
            management firm and conducted research on{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4745633"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              global macroeconomic investing
            </a>{" "}
            and{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4794183"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              individual stock selection
            </a>
            . Currently, I'm building Artificial Alpha, an AI-powered financial
            analyst. Apart from my academic and professional interests, I'm an
            avid NFL fan and have placed{" "}
            <a
              href="https://projects.fivethirtyeight.com/2022-nfl-forecasting-game/leaderboard/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              2nd out of nearly 10,000 participants
            </a>{" "}
            in FiveThirtyEight's NFL prediction contest.
          </p>
        </section>

        {/* AI Timeline Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">AI's Rapid Evolution</h2>
          <div className="space-y-2 opacity-90">
            <p className="mb-4">
              Here's a quick recap of recent and rapid advancements in AI:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                1966: The first chatbot, ELIZA, was created by Joseph
                Weizenbaum.
              </li>
              <li>
                1997: IBM's Deep Blue defeated world chess champion Garry
                Kasparov.
              </li>
              <li>
                2011: IBM's Watson won Jeopardy! against former champions.
              </li>
              <li>
                2016: Google's AlphaGo defeated world Go champion Lee Sedol.
              </li>
              <li>
                2022: ChatGPT, a large-scale conversational AI model, was
                released by OpenAI.
              </li>
              <li>
                2023: Tesla's Full Self-Driving (FSD) system is 10x safer than
                human drivers.
              </li>
              <li>
                2023: Google's AI model, Gemini, was released with the ability
                to understand text, images, and audio.
              </li>
              <li>
                2024: OpenAI's reasoning model, o1, surpassed physics, biology,
                and chemistry PhDs in their respective fields.
              </li>
            </ul>
          </div>
        </section>

        {/* Artificial Alpha Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Artificial Alpha</h2>
          <p className="mb-6 opacity-90">
            Specifically with regards to finance, AI has been shown to better{" "}
            <a
              href="https://arxiv.org/pdf/2304.07619"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              understand news sentiment
            </a>{" "}
            and{" "}
            <a
              href="https://bfi.uchicago.edu/wp-content/uploads/2024/05/BFI_WP_2024-65.pdf"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              do financial statement analysis
            </a>{" "}
            than human professional analysts.
          </p>

          <p className="mb-6 opacity-90">
            Artificial Alpha seeks to harness the growing power and success of
            AI to create a new kind of financial analyst. Currently, our analyst
            is capable of generating detailed qualitative and quantitative
            quarterly reports, as well as shorter summaries of current events.
          </p>

          <p className="mb-6 opacity-90">
            We're working to give this AI analyst the ability to:
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2 mb-6 opacity-90">
            <li>Track a broader range of SEC filings</li>
            <li>"Listen" in on earnings calls</li>
            <li>Perform financial statement analysis</li>
            <li>Read and analyze news in real-time</li>
            <li>Analyze companies relative to competitors</li>
            <li>
              Engage in detailed company discussions via text or voice chat
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-16">
          <p className="mb-4 opacity-90">
            If you are interested in learning more about how Artificial Alpha
            can help your firm, please reach out to me at{" "}
            <a
              href="mailto:aidanvyas@rice.edu"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              aidanvyas@rice.edu
            </a>
          </p>
        </section>

        {/* Example Report Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Example Analysis</h2>

          <div className="mb-6">
            <p className="mb-4 opacity-90">
              Below is an example analysis of Apple's FY 2023 earnings report,
              demonstrating our AI analyst's capabilities in financial analysis
              and reporting.
            </p>

            {/* Primary Download Button */}
            <div className="mb-8 text-center">
              <a
                href="/example-report.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Full Report (PDF)
              </a>
            </div>

            {/* Preview Container */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600">
                  Preview the report below or download for best viewing
                  experience
                </p>
              </div>
              <object
                data="/example_report.pdf#navpanes=0"
                type="application/pdf"
                className="w-full h-[600px]"
              >
                <p className="p-4 text-center">
                  Unable to display PDF preview.{" "}
                  <a
                    href="/example-report.pdf"
                    download
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Please download to view
                  </a>
                </p>
              </object>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 pb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/aidanvyas"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aidanvyas"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/aidanvyas"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Twitter
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
