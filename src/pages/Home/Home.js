import { Hero } from "components/Hero/Hero.jsx";

export default function Home() {
  return (
    <main>
      <Hero/>

      <section>
        <div>
          <ul>
            <li>
              <h2>32,000 </h2>
              <p>Experienced tutors</p>
            </li>
            <li>
              <h2>300,000 </h2>
              <p>5-star tutor reviews</p>
            </li>
            <li>
              <h2>120 </h2>
              <p>Subjects taught</p>
            </li>
            <li>
              <h2>200 </h2>
              <p>Tutor nationalities</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
