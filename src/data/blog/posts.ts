export interface BlogSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "scope-a-nextjs-rebuild",
    title: "How I scope a Next.js rebuild before writing a line of code",
    excerpt:
      "A rebuild fails when the new site copies the old one page for page. I start from the journeys that make money, then decide what Next.js actually has to own.",
    category: "Next.js",
    tags: ["Next.js", "Planning", "Rebuilds"],
    publishedAt: "2026-09-02",
    sections: [
      {
        heading: "Start from the live journeys",
        paragraphs: [
          "I ask for the three paths a customer already completes: the page they land on, the step where they pay or enquire, and the screen the team uses the next morning. Those paths are the rebuild. Everything else is a candidate for later.",
          "A sitemap export is useful as a map of what exists. It is a poor map of what matters. I mark each URL as keep, merge, or drop, and I write down why. If a page has traffic but no next step, it stays only if we can give it one.",
        ],
      },
      {
        heading: "Decide what the framework owns",
        paragraphs: [
          "Next.js is a good fit when the site has real routes, forms that must not lose a lead, and content that should stay fast. It is a poor fit when the client needs a marketing team to invent new layouts every week. I say that in the scope, not after the design is approved.",
          "The first release usually includes the homepage, the money pages, one detail template, and the enquiry path. Auth, a full CMS, and a blog can wait until those pages are in production and the client has used them.",
        ],
        points: [
          "List the routes in the first release, with the data each one reads.",
          "Name the integrations that must work on day one: payment, email, or WhatsApp.",
          "Write the out-of-scope list in the same document as the estimate.",
        ],
      },
      {
        heading: "Put the risk in the first week",
        paragraphs: [
          "The risky part of a rebuild is rarely the styling. It is the content shape, the redirect map, and the form that currently lives in a plugin. I build a thin version of those in the first week so we find the awkward fields before the visual design is finished.",
          "If that week shows the content model is wrong, we change the model. Changing it after twelve templates exist is how rebuilds slip by a month.",
        ],
      },
    ],
  },
  {
    slug: "what-to-keep-when-you-leave-a-page-builder",
    title: "What to keep when you leave a page builder",
    excerpt:
      "Moving off Webflow or WordPress is not a chance to redesign every sentence. The useful parts are the URLs, the proof, and the offers that already convert.",
    category: "Product engineering",
    tags: ["Webflow", "WordPress", "Rebuilds"],
    publishedAt: "2026-08-18",
    sections: [
      {
        heading: "Keep the URLs that already rank",
        paragraphs: [
          "I export the current URLs and the pages that bring organic visits or enquiries. Those paths get a redirect or they keep the same slug. A prettier URL is not worth a month of lost traffic.",
          "Pages with no visits and no internal links can go. I still list them, so nobody discovers a missing legal page after launch.",
        ],
      },
      {
        heading: "Keep the proof, rewrite the chrome",
        paragraphs: [
          "Testimonials, project facts, pricing bands, and the words clients already use in sales calls are worth moving across. Hero lines that were written to fill a template usually are not.",
          "I paste the old page into a doc and highlight only the sentences a buyer needs. The new template is designed around that highlight, not around the old section order.",
        ],
      },
      {
        heading: "Leave the plugins behind on purpose",
        paragraphs: [
          "A page builder collects plugins for forms, popups, sliders, and SEO. Most of them exist because the builder could not do the job. In the new site I replace a plugin with a small, named feature: one enquiry form, one metadata helper, one image treatment.",
          "If a plugin is doing something the business actually relies on, I write that behaviour down before the old site is archived. Guessing it from the live page misses the email routing and the hidden fields.",
        ],
      },
    ],
  },
  {
    slug: "add-ai-without-a-rewrite",
    title: "Add an AI feature without rewriting the product",
    excerpt:
      "Most products need one assisted task, not a chatbot on every screen. I attach the model to a job the team already does, with a human check before anything is sent.",
    category: "Automation",
    tags: ["AI", "OpenAI", "Product"],
    publishedAt: "2026-08-04",
    sections: [
      {
        heading: "Pick a task with a visible input and output",
        paragraphs: [
          "A good first AI feature has a source the user already trusts and a result they can edit. Drafting a reply from a support thread, summarising an enquiry, or tagging an upload all fit. An open chat box does not, because nobody can tell when it is wrong.",
          "I write the prompt as a function of fields we store, not as a paragraph hidden in a dashboard. When the output is bad, we can see which field was empty.",
        ],
      },
      {
        heading: "Keep the model beside the workflow",
        paragraphs: [
          "The existing screen stays. The model adds a draft, a suggestion, or a label. Sending, publishing, and charging remain explicit actions. That keeps the feature useful on the days the model is slow or the key is out of credit.",
          "I log the input length, the output, and whether a person accepted it. After a few dozen uses we know if the feature is saving time or creating a second editing job.",
        ],
        points: [
          "One task, one screen, one accept button.",
          "Store the draft separately from the published record.",
          "Fail with the previous manual path still available.",
        ],
      },
      {
        heading: "Spend the budget on evaluation",
        paragraphs: [
          "The expensive part is not the API call. It is noticing that the model invents a price or misses a constraint the business cares about. I collect ten real examples before the feature is offered to customers, and I keep those examples as a check when the prompt changes.",
        ],
      },
    ],
  },
  {
    slug: "smaller-first-release",
    title: "The first release should be smaller than the proposal",
    excerpt:
      "A proposal lists the whole product. A first release lists the path one customer can finish. I cut the proposal in the open so the date stays honest.",
    category: "Freelance",
    tags: ["Scoping", "Clients", "Delivery"],
    publishedAt: "2026-07-21",
    sections: [
      {
        heading: "Name the customer and the finish line",
        paragraphs: [
          "I write one sentence: who uses the first version, and what they can do at the end of it. If that sentence needs three “and”s, the release is still a proposal.",
          "Internal admin, reporting, and extra roles move to a second list. They are real work. They are not required for the first customer to succeed.",
        ],
      },
      {
        heading: "Show the cut, do not hide it",
        paragraphs: [
          "Clients accept a smaller release when they can see what moved, not when features quietly disappear. I keep a short table: in this release, next release, not doing. The estimate matches the first column only.",
          "Design can still show the later screens. They are marked as later, so engineering does not build them because they appeared in a Figma frame.",
        ],
      },
      {
        heading: "Leave room for what the first users teach you",
        paragraphs: [
          "The second release should be planned as a reaction to the first one. I hold a week after launch for the fixes that only show up with real data: a missing field, a slow query, a status the team did not know they used.",
          "That week is part of the project. Treating it as free support is how the next engagement starts already behind.",
        ],
      },
    ],
  },
  {
    slug: "shopify-or-a-custom-storefront",
    title: "Shopify or a custom storefront",
    excerpt:
      "I use Shopify when the catalogue, checkout, and apps are the product. I use a custom storefront when the buying flow is unusual enough that apps would fight each other.",
    category: "Commerce",
    tags: ["Shopify", "Next.js", "E-commerce"],
    publishedAt: "2026-07-07",
    sections: [
      {
        heading: "Stay on Shopify when the shop is the business",
        paragraphs: [
          "Standard catalogues, discounts, shipping, and a checkout you do not want to own are Shopify’s job. A custom theme or a headless front can still sit in front of it. Rebuilding checkout is rarely the valuable part.",
          "I push back when the reason to leave is “we want it in React.” That is an implementation preference. It does not, by itself, pay for payments, tax, and refunds.",
        ],
      },
      {
        heading: "Leave when the flow is the product",
        paragraphs: [
          "Custom wins when the purchase depends on configuration, approval, inventory that does not match a variant, or an account that Shopify’s customer model keeps bending. In those cases every app is a patch on the wrong object.",
          "A Next.js storefront still needs a source of truth for products, orders, and paid state. I pick that source before I pick the UI kit. The screens are the easy part.",
        ],
        points: [
          "If checkout can stay hosted, leave it hosted.",
          "If a product is not a product-plus-variants, say so in the model.",
          "Plan refunds and failed payments in the first scope.",
        ],
      },
      {
        heading: "A hybrid is often the honest answer",
        paragraphs: [
          "Catalogue and checkout on Shopify, a custom account or content site beside it, is a reasonable split. I only recommend it when the join between the two is a link or a small API, not a second source of orders.",
        ],
      },
    ],
  },
  {
    slug: "automation-before-launch",
    title: "The automations I want in place before launch",
    excerpt:
      "Launch week is a bad time to discover that enquiries land in one inbox and nowhere else. A few small automations make the first real customers visible.",
    category: "Automation",
    tags: ["Automation", "Launch", "Operations"],
    publishedAt: "2026-06-23",
    sections: [
      {
        heading: "Notify a person, and store the record",
        paragraphs: [
          "A form that only opens WhatsApp or only sends an email will lose leads. I want two outcomes: a message a human sees quickly, and a row that still exists the next day. The message can be email, WhatsApp, or Slack. The row is the system of record.",
          "The stored record includes the source, so a contact form, a service enquiry, and a booking are not mixed into one anonymous note.",
        ],
      },
      {
        heading: "Automate the handoff, not the judgment",
        paragraphs: [
          "Useful launch automations are boring: create the lead, tag the service, tell the owner, and give the visitor a clear next step. Scoring, routing across a team, and CRM stages can wait until there is volume.",
          "I avoid automations that message the customer in a voice nobody has approved. A wrong automated reply does more damage than a slow human one.",
        ],
      },
      {
        heading: "Check the failure on purpose",
        paragraphs: [
          "Before launch I submit the form with a missing field, a very long message, and a duplicate email. I want a validation error, a stored row, and a notification for the valid cases. I also want to know what the visitor sees if the notification provider is down.",
          "That check takes an hour. Skipping it means the first real enquiry is the test.",
        ],
      },
    ],
  },
  {
    slug: "api-integrations-that-fail-visibly",
    title: "API integrations that fail in a way you can see",
    excerpt:
      "Stripe, a CRM, or a messaging API will fail. The useful work is making the failure visible, retryable, and unable to charge or email someone twice.",
    category: "Product engineering",
    tags: ["APIs", "Stripe", "Reliability"],
    publishedAt: "2026-06-09",
    sections: [
      {
        heading: "Write down the success and the duplicates",
        paragraphs: [
          "For each integration I note what “done” means in our database, not in the other product. A payment is done when we have stored the provider id and the status we trust. A second webhook for the same id must not create a second order.",
          "I keep the provider payload, or the parts we need, so a support question can be answered without logging into three dashboards.",
        ],
      },
      {
        heading: "Timeouts are part of the design",
        paragraphs: [
          "The user should not wait on a slow third party for a screen that can render without it. If the call is required, the button shows a pending state and the job can be retried. If it is optional, the page renders and the enrichment fills in later.",
          "Retries need a key. Without an idempotency key, a retry is how you double-charge or double-email.",
        ],
        points: [
          "Store the external id as soon as you have it.",
          "Treat webhooks as hints, and read the provider when the status matters.",
          "Show the last error to the operator, not only to the logs.",
        ],
      },
      {
        heading: "One place to look when it breaks",
        paragraphs: [
          "I add a small admin view for failed jobs: what we tried, when, and the status code. A developer can live in logs. The person running the business on a Saturday cannot.",
        ],
      },
    ],
  },
  {
    slug: "a-week-on-a-freelance-build",
    title: "What a week on a freelance build actually looks like",
    excerpt:
      "The calendar is not eight hours of uninterrupted coding. It is a build day, a review, a written decision, and enough slack that a surprise does not eat the release.",
    category: "Freelance",
    tags: ["Freelance", "Process", "Clients"],
    publishedAt: "2026-05-26",
    sections: [
      {
        heading: "Monday is for the unclear part",
        paragraphs: [
          "I start the week on the task I understand the least. If it is a content model, a payment state, or a layout that does not fit the content, I want that answer before I polish screens around it.",
          "I send a short note the same day: what I tried, what I decided, and what I need from the client. Waiting until Friday to ask a question is how Friday becomes the following Tuesday.",
        ],
      },
      {
        heading: "Midweek is for something they can click",
        paragraphs: [
          "By the middle of the week there is a URL, even if it is ugly. Clients review software more honestly than they review a description of software. I ask for comments on the flow, not for a mood on the font.",
          "I batch visual fixes instead of chasing each one as it arrives. A running list, applied in one pass, keeps the branch understandable.",
        ],
      },
      {
        heading: "Friday is a status, not a surprise",
        paragraphs: [
          "The Friday note says what shipped, what moved, and what is blocked. If the date is at risk, the note says so while there is still a week to cut scope. A calm Friday is the result of the Monday question, not of hiding the slip.",
        ],
      },
    ],
  },
  {
    slug: "how-i-choose-a-database",
    title: "How I choose a database for a new product",
    excerpt:
      "I pick the database from the relationships and the queries, not from the logo on the pitch. Postgres covers most products I ship. A document store has to earn its place.",
    category: "Product engineering",
    tags: ["PostgreSQL", "Supabase", "Firebase"],
    publishedAt: "2026-05-12",
    sections: [
      {
        heading: "Draw the records that point at each other",
        paragraphs: [
          "Leads, customers, orders, and the pages that list them are relationships. If I need “customers created from leads” or “posts in this category,” a relational database is the straightforward tool. Postgres, often through Supabase, is the default I reach for.",
          "Firebase is a comfortable place to store documents and to sync a UI. It becomes awkward when the product is a set of reports across those documents. I do not start there just because the free project is quick to create.",
        ],
      },
      {
        heading: "Match the tool to who will operate it",
        paragraphs: [
          "A founder who will read rows in a table benefits from a database with a clear admin. A product that is mostly realtime presence can justify a different store. I write that reason down so the next feature does not inherit a database that fought the first feature.",
          "Auth, file storage, and the database do not have to come from the same vendor. They often do, because one dashboard is easier to hand over. Ease of handover is a real requirement.",
        ],
      },
      {
        heading: "Leave room for the content shape",
        paragraphs: [
          "Marketing pages and blog posts change shape more often than orders do. I keep the stable columns in tables and the flexible body in a structured field the template already understands. Inventing a new field in the database does nothing if the React template has nowhere to render it.",
        ],
      },
    ],
  },
  {
    slug: "service-pages-that-sound-like-a-person",
    title: "Service pages that can rank and still sound like a person",
    excerpt:
      "A service page can answer the search and still read like the person who does the work. The structure is consistent. The sentences are specific.",
    category: "Next.js",
    tags: ["SEO", "Content", "Next.js"],
    publishedAt: "2026-04-28",
    sections: [
      {
        heading: "One template, specific answers",
        paragraphs: [
          "I use the same sections on every service: who it is for, the problem, the way I work, what you leave with, and the questions people actually ask. The template makes the site feel finished. The writing has to name the real constraint, or the page is a brochure.",
          "Keywords belong in the title and the first description because that is how the page is shared. They do not belong in every heading. A heading should tell a buyer what the section decides.",
        ],
      },
      {
        heading: "Proof sits next to the claim",
        paragraphs: [
          "“Scalable web applications” is a claim. A link to a live store, a timeline in weeks, and a list of what is included are proof. I put the proof in the body and keep the metadata short enough to read in a search result.",
          "Related services are there for the visitor who is on the wrong page, not as a block of links for their own sake. Three relevant links are enough.",
        ],
      },
      {
        heading: "Metadata is part of the page",
        paragraphs: [
          "Each service gets its own title, description, and canonical URL. The layout stays shared. When the copy changes, the metadata changes with it, so the tab title and the page do not disagree.",
        ],
      },
    ],
  },
  {
    slug: "booking-without-another-product",
    title: "A booking flow that does not depend on another product",
    excerpt:
      "A calendar embed is fine until it becomes the only way a lead can reach you. I design the booking as a message with a time, and I keep a path that still works if the widget fails.",
    category: "Freelance",
    tags: ["Booking", "UX", "Leads"],
    publishedAt: "2026-04-14",
    sections: [
      {
        heading: "Ask for a time, not for an account",
        paragraphs: [
          "The visitor needs to say who they are, what they want, and when they can talk. They do not need an account on a scheduling product before that sentence exists. I collect the name, the project, and a slot in the page they are already on.",
          "Times are shown in India Standard Time, because that is the timezone I work in. The label says so. A slot that has already passed today is closed.",
        ],
      },
      {
        heading: "Send the details somewhere durable",
        paragraphs: [
          "Opening WhatsApp with the details filled in is a good finish for a visitor who wants a conversation. It is a weak record. The same details should also land in a place I can search next week.",
          "Until that store exists, I still treat the message format as a contract: the same fields, in the same order, from the contact form, the service enquiry, the chat, and the scheduler.",
        ],
      },
      {
        heading: "Do not hide the other ways to talk",
        paragraphs: [
          "Phone, email, and WhatsApp stay visible next to the scheduler. Some clients will not pick a slot. They will still hire. A booking widget that replaces those links is a narrower front door than the one you had.",
        ],
      },
    ],
  },
  {
    slug: "content-editors-can-change",
    title: "A content model editors can change without a deploy",
    excerpt:
      "Editors should change words, projects, and posts. They should not have to invent a layout. I keep the template in code and the fields beside it.",
    category: "Next.js",
    tags: ["CMS", "Content", "Next.js"],
    publishedAt: "2026-03-31",
    sections: [
      {
        heading: "The template declares the fields",
        paragraphs: [
          "A blog post on this site has a title, an excerpt, a category, tags, a date, and a set of sections. The article page knows how to render those. Adding a field in a database does nothing until this template has a place for it.",
          "That is a smaller CMS than a page builder, and it is the one I want for a portfolio. New visual sections are a code change. New posts are not.",
        ],
      },
      {
        heading: "Collections stay boring on purpose",
        paragraphs: [
          "Projects, testimonials, services, and posts are separate collections because they render in different templates. They can share an admin later. They should not share one blob of JSON with optional keys nobody remembers.",
          "Categories and tags are labels on a post, with their own archive pages. They are not a second design system.",
        ],
        points: [
          "One template per public URL pattern.",
          "Draft and published, so a half-written post stays off the site.",
          "The public site reads published rows only.",
        ],
      },
      {
        heading: "Start with the posts you already have",
        paragraphs: [
          "These articles live in the repository so the templates can be reviewed before a database exists. When the CMS arrives, the same fields move into rows. The routes stay: the index, the category archive, the tag archive, and the article.",
        ],
      },
    ],
  },
];
