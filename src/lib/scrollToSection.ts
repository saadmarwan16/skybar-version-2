export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  console.log("Section id:", sectionId, element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
