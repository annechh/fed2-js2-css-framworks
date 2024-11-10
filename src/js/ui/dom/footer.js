// export function mobileFooter() {
//   const bottomItem = document.getElementById('mobileFooter');

//   window.addEventListener('scroll', () => {
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const pageHeight = document.documentElement.scrollHeight;

//     if (scrollPosition >= pageHeight - 100) {
//       bottomItem.classList.remove('hidden');
//     } else {
//       bottomItem.classList.add('hidden');
//     }
//   });
// }

export function footerStyle() {
  const footerClasses = document.querySelector('.footer');
  footerClasses.classList.add(
    'bg-purpleLight',
    'dark:bg-violetLight',
    'h-16',
    'w-full',
    'mt-10'
    // 'fixed',
    // 'bottom-0',
    // 'hidden'
  );
}
