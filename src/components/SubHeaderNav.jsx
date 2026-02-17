import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../styles/subHeaderNav.css";

export default function SubHeaderNav({ sections, activeSection, setActiveSection }) {

  if (!sections || sections.length === 0) return null;

  const currentIndex = sections.indexOf(activeSection);

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0
        ? sections.length - 1
        : currentIndex - 1;

    setActiveSection(sections[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === sections.length - 1
        ? 0
        : currentIndex + 1;

    setActiveSection(sections[newIndex]);
  };

  return (
    <div className="subHeaderNav">
      <MdChevronLeft
        className="navArrow"
        onClick={handlePrev}
      />

      <h3 className="navTitle">
        {activeSection}
      </h3>

      <MdChevronRight
        className="navArrow"
        onClick={handleNext}
      />
    </div>
  );
}
