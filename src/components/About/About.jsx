import "./About.css";
import aboutImage from "../../assets/aboutPicture.png";
function About() {
  return (
    <section className="about">
      <img src={aboutImage} alt="" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describles the project author. Here you should indicate
          your name, what you do and which development technologies you know.
          You can also talk about your experience with TripleTen, what you
          learned there, and how you help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
