import img1 from "@public/assets/images/news/1.jpg";
import img2 from "@public/assets/images/news/2.jpg";
import img3 from "@public/assets/images/news/3.webp";
import img4 from "@public/assets/images/news/4.webp";
import img5 from "@public/assets/images/news/5.webp";
import img6 from "@public/assets/images/news/6.jpg";
import { StaticImageData } from "@node_modules/next/image";
import { undefined } from "@node_modules/zod";

interface NewsArticle {
  id: number;
  title: string;
  img: StaticImageData;
  publishedAt: string;
  content: string;
}

export const fakeNews: NewsArticle[] = [
  {
    id: 1,
    title: "Apple's iPad Mini falls back to $400 at Amazon",
    img: img1,
    publishedAt: "2023-07-10T10:55:28Z",
    content:
      "Prime Day is almost upon us and we're seeing some early gadget deals, including Apple's sixth-generation iPad Mini back on sale for $400. This discount takes 20 percent off its sticker price of $500.Prime Day is almost upon us and we're seeing some early gadget deals, including Apple's sixth-generation iPad Mini back on sale for $400. This discount takes 20 percent off its sticker price of $500.Prime Day is almost upon us and we're seeing some early gadget deals, including Apple's sixth-generation iPad Mini back on sale for $400. This discount takes 20 percent off its sticker price of $500.Prime Day is almost upon us and we're seeing some early gadget deals, including Apple's sixth-generation iPad Mini back on sale for $400. This discount takes 20 percent off its sticker price of $500.",
  },
  {
    id: 2,
    title:
      "The Morning After: Meta's Threads tops 100 million users in under a week",
    img: img2,
    publishedAt: "2023-07-10T11:15:15Z",
    content:
      "In just four days of the app going live on Wednesday evening, Threads already has more than 100 million users, according to Quiver Quantitative's Threads Tracker. Thread is a sibling app to Instagram. In just four days of the app going live on Wednesday evening, Threads already has more than 100 million users, according to Quiver Quantitative's Threads Tracker. Thread is a sibling app to Instagram. In just four days of the app going live on Wednesday evening, Threads already has more than 100 million users, according to Quiver Quantitative's Threads Tracker. Thread is a sibling app to Instagram. In just four days of the app going live on Wednesday evening, Threads already has more than 100 million users, according to Quiver Quantitative's Threads Tracker. Thread is a sibling app to Instagram. In just four days of the app going live on Wednesday evening, Threads already has more than 100 million users, according to Quiver Quantitative's Threads Tracker. Thread is a sibling app to Instagram.",
  },
  {
    id: 3,
    title: "Lotus Eletre 2023 Review: Prices, Specs, Pros and Cons",
    img: img3,
    publishedAt: "2023-07-10T07:00:00Z",
    content:
      "What would Colin Chapman say? The late founder of Lotus was a restless innovator whose famous mantra was Simplify, then add lightness. Surely the new Eletre, a complex and heavy electric SUV, is the. What would Colin Chapman say? The late founder of Lotus was a restless innovator whose famous mantra was Simplify, then add lightness. Surely the new Eletre, a complex and heavy electric SUV, is the. What would Colin Chapman say? The late founder of Lotus was a restless innovator whose famous mantra was Simplify, then add lightness. Surely the new Eletre, a complex and heavy electric SUV, is the. What would Colin Chapman say? The late founder of Lotus was a restless innovator whose famous mantra was Simplify, then add lightness. Surely the new Eletre, a complex and heavy electric SUV, is the. What would Colin Chapman say? The late founder of Lotus was a restless innovator whose famous mantra was Simplify, then add lightness. Surely the new Eletre, a complex and heavy electric SUV, is the.",
  },
  {
    id: 4,
    title: "We Might Finally See an OLED MacBook Pro by 2025",
    img: img4,
    publishedAt: "2023-07-10T14:18:00Z",
    content:
      "Weve long been dreaming of an OLED MacBook Pro model, though if recent reports from industry analysts are correct, it will either be two or four years before well see Apple-brand organic displays. Weve long been dreaming of an OLED MacBook Pro model, though if recent reports from industry analysts are correct, it will either be two or four years before well see Apple-brand organic displays. Weve long been dreaming of an OLED MacBook Pro model, though if recent reports from industry analysts are correct, it will either be two or four years before well see Apple-brand organic displays. Weve long been dreaming of an OLED MacBook Pro model, though if recent reports from industry analysts are correct, it will either be two or four years before well see Apple-brand organic displays. Weve long been dreaming of an OLED MacBook Pro model, though if recent reports from industry analysts are correct, it will either be two or four years before well see Apple-brand organic displays.",
  },
  {
    id: 5,
    title:
      "Foundation's David S. Goyer on Expanding Asimov's Vision in Season 2",
    img: img5,
    publishedAt: "2023-07-10T17:45:00Z",
    content:
      "Foundation season two arrives this week (heres our catch-up on season one), which means a return to the Isaac Asimov-created sci-fi realm where math predicts the future, clones rule the galaxy, and. Foundation season two arrives this week (heres our catch-up on season one), which means a return to the Isaac Asimov-created sci-fi realm where math predicts the future, clones rule the galaxy, and. Foundation season two arrives this week (heres our catch-up on season one), which means a return to the Isaac Asimov-created sci-fi realm where math predicts the future, clones rule the galaxy, and. Foundation season two arrives this week (heres our catch-up on season one), which means a return to the Isaac Asimov-created sci-fi realm where math predicts the future, clones rule the galaxy, and. Foundation season two arrives this week (heres our catch-up on season one), which means a return to the Isaac Asimov-created sci-fi realm where math predicts the future, clones rule the galaxy, and.",
  },
  {
    id: 6,
    title:
      "Review: Exquisite Drops of God brings the world of elite wine down to earth",
    img: img6,
    publishedAt: "2023-07-10T16:12:19Z",
    content:
      "Enlarge/ Issei Tomine (Tomohisa Yamashita) and Camille Leger (Fleur Geffrier) must compete to be the sole heir of a globally renowned wine critic in the limited series Drops of God on Apple TV+. Enlarge/ Issei Tomine (Tomohisa Yamashita) and Camille Leger (Fleur Geffrier) must compete to be the sole heir of a globally renowned wine critic in the limited series Drops of God on Apple TV+. Enlarge/ Issei Tomine (Tomohisa Yamashita) and Camille Leger (Fleur Geffrier) must compete to be the sole heir of a globally renowned wine critic in the limited series Drops of God on Apple TV+. Enlarge/ Issei Tomine (Tomohisa Yamashita) and Camille Leger (Fleur Geffrier) must compete to be the sole heir of a globally renowned wine critic in the limited series Drops of God on Apple TV+. Enlarge/ Issei Tomine (Tomohisa Yamashita) and Camille Leger (Fleur Geffrier) must compete to be the sole heir of a globally renowned wine critic in the limited series Drops of God on Apple TV+.",
  },
];
