import AboutMe from "../components/content/aboutme";
import Projects from "../components/content/projects";
import Experience from "@/components/content/experience";
import PageWrapper from "@/components/layout/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <AboutMe />
      <Experience />
      <Projects />
      <div>{/* banner placeholder */}</div>
    </PageWrapper>
  );
};

export default HomePage;
