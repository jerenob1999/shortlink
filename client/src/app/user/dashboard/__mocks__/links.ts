import { Link } from "@/types/link";

const mockLinks: Link[] = [
  {
    fullUrl: "https://www.example.com",
    shortUrl: "https://exmpl.co/1",
    description: "Example website",
    clicks: 123,
    lastClicked: new Date("2024-07-01T12:00:00Z"),
    userId: 1,
  },
  {
    fullUrl: "https://www.google.com",
    shortUrl: "https://goo.gl/1",
    description: "Google search engine",
    clicks: 456,
    lastClicked: new Date("2024-07-10T15:30:00Z"),
    userId: 2,
  },
  {
    fullUrl: "https://www.github.com",
    shortUrl: "https://git.io/1",
    description: "GitHub repository hosting",
    clicks: 789,
    lastClicked: new Date("2024-07-05T09:45:00Z"),
    userId: 3,
  },
  {
    fullUrl: "https://www.openai.com",
    shortUrl: "https://opai.co/1",
    description: "OpenAI homepage",
    clicks: 321,
    lastClicked: null, // No clicks yet
    userId: 4,
  },
];

export default mockLinks;
