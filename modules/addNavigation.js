export default (navigations) => {
  navigations.forEach((navigation) => {
    const link = document.getElementById(navigation.linkId);

    link.addEventListener('click', (event) => {
      event.preventDefault();

      // hide all sections
      const allSections = document.querySelectorAll('main > section');
      allSections.forEach((section) => {
        section.classList.add('display-none');
      });

      // show the relevant section
      const target = document.getElementById(navigation.targetId);
      target.classList.remove('display-none');
    });
  });
};