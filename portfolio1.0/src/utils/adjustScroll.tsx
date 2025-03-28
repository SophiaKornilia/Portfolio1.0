export const adjustScroll =
  (id: string) => (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event?.preventDefault();
    const element = document.getElementById(id);

    let headerOffset: number;
    const isMobile = window.innerWidth <= 480;

    switch (id) {
      case "about":
        headerOffset = 130;
        break;
      case "skills":
        headerOffset = isMobile ? 110 : 160;
        break;
      case "projects":
        headerOffset = isMobile ? -1000 : -440;
        break;
      case "contact":
        headerOffset = isMobile ? 80 : -10;
        break;
      default:
        headerOffset = 0;
        break;
    }

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
