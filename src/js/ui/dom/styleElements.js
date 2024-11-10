export function formDivWrapper() {
  const formDiv = document.querySelector('.form-div-wrapper');
  formDiv.classList.add(
    'bg-purpleLight',
    'dark:bg-violetLight',
    'py-10',
    'md:py-20',
    'max-w-[800px]',
    'w-full',
    'flex',
    'flex-col',
    'gap-5',
    'justify-center',
    'items-center',
    'rounded-xl',
    'mx-4'
  );
}

export function formStyle() {
  const form = document.querySelector('.form');
  form.classList.add('flex', 'flex-col', 'gap-4', 'max-w-lg', 'w-full');
}

export function labelInputDivStyle() {
  const targetDiv = document.querySelectorAll('.label-input-div');

  targetDiv.forEach((div) => {
    div.classList.add('flex', 'flex-col', 'gap-2', 'mx-4');
  });
}

export function labelStyle() {
  const targetLabel = document.querySelectorAll('.label');
  console.log(targetLabel);

  targetLabel.forEach((input) => {
    input.classList.add('text-white', 'md:text-xl');
  });
}

export function inputStyle() {
  const targetInput = document.querySelectorAll('.input');
  console.log(targetInput);

  targetInput.forEach((input) => {
    input.classList.add(
      'rounded',
      'h-12',
      'px-4',
      'text-purpleDark',
      'font-semibold',
      'bg-white'
    );
  });
}

export function bodyStyle() {}

export function mainStyle() {}
